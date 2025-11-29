import 'dart:async';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const WebtoonViewer());
}

class WebtoonViewer extends StatelessWidget {
  const WebtoonViewer({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: ViewerPage(),
      debugShowCheckedModeBanner: false,
    );
  }
}

// 재생 상태 (대기, 재생 중, 종료)
enum PlayerState { idle, playing, finished }
// 재생 속도 모드 (느림, 빠름)
enum SpeedMode { slow, fast }
// 웹툰 타입 (4개로 확장)
enum WebtoonType { webtoon0, webtoon1, webtoon2, webtoon3, webtoon4 }

class ViewerPage extends StatefulWidget {
  @override
  State<ViewerPage> createState() => _ViewerPageState();
}

class _ViewerPageState extends State<ViewerPage> {
  PlayerState playerState = PlayerState.idle;
  SpeedMode speed = SpeedMode.slow;
  WebtoonType webtoon = WebtoonType.webtoon1; // 기본값: 웹툰 1

  // 각 웹툰의 이미지 경로 설정 (assets/webtoon_kor/webtoonN/i.png)
  // 웹툰 1: 1.png ~ 6.png (6장)
  final Map<WebtoonType, List<String>> webtoonImages = {
    WebtoonType.webtoon0: List.generate(3, (i) => "assets/webtoon_kor/webtoon0/${i + 1}.png"),
    WebtoonType.webtoon1: List.generate(6, (i) => "assets/webtoon_kor/webtoon1/${i + 1}.png"),
    // 웹툰 2: 1.png ~ 10.png (10장)
    WebtoonType.webtoon2: List.generate(10, (i) => "assets/webtoon_kor/webtoon2/${i + 1}.png"),
    // 웹툰 3: 1.png ~ 10.png (10장)
    WebtoonType.webtoon3: List.generate(10, (i) => "assets/webtoon_kor/webtoon3/${i + 1}.png"),
    // 웹툰 4: 1.png ~ 15.png (15장)
    WebtoonType.webtoon4: List.generate(15, (i) => "assets/webtoon_kor/webtoon4/${i + 1}.png"),
  };

  int currentIndex = -1;
  Timer? playbackTimer;

  // 속도에 따른 딜레이 설정 (느림: 3000ms, 빠름: 1500ms)
  int get delayMs => speed == SpeedMode.slow ? 3000 : 1500;

  // 현재 선택된 웹툰의 이미지 목록 반환
  List<String> get currentImageList => webtoonImages[webtoon] ?? [];

  @override
  void dispose() {
    playbackTimer?.cancel();
    super.dispose();
  }

  // 재생 시작
  void startPlayback() {
    if (currentImageList.isEmpty) return; // 이미지가 없으면 재생하지 않음

    setState(() {
      playerState = PlayerState.playing;
      currentIndex = 0;
    });

    startTimer();
  }

  // 재생 중지 (초기 상태로 복귀)
  void stopPlayback() {
    playbackTimer?.cancel();
    setState(() {
      currentIndex = -1;
      playerState = PlayerState.idle;
    });
  }

  // 재시작
  void restartPlayback() {
    if (currentImageList.isEmpty) return; // 이미지가 없으면 재생하지 않음

    setState(() {
      playerState = PlayerState.playing;
      currentIndex = 0;
    });
    startTimer();
  }

  // 타이머 시작/재시작
  void startTimer() {
    playbackTimer?.cancel();

    playbackTimer = Timer.periodic(Duration(milliseconds: delayMs), (timer) {
      if (currentIndex >= currentImageList.length - 1) {
        timer.cancel();
        setState(() {
          playerState = PlayerState.finished;
          currentIndex = -1;
        });
        return;
      }

      setState(() {
        currentIndex++;
      });
    });
  }

  // 웹툰 선택 라디오 버튼 위젯을 생성하는 헬퍼 함수
  Widget _buildWebtoonRadio(WebtoonType type, String label) {
    return Expanded(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Radio<WebtoonType>(
            value: type,
            groupValue: webtoon,
            onChanged: (v) {
              if (playerState == PlayerState.playing) return;
              setState(() => webtoon = v!);
            },
            fillColor: MaterialStateProperty.all<Color>(Colors.white),
          ),
          Text(label, style: const TextStyle(color: Colors.white)),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    Widget centerContent;

    // 중앙에 표시될 텍스트
    if (playerState == PlayerState.idle) {
      centerContent = const Text(
        "Ready", // 준비
        style: TextStyle(color: Colors.white, fontSize: 20),
      );
    } else if (playerState == PlayerState.finished) {
      centerContent = const Text(
        "End of Webtoon", // 웹툰 종료
        style: TextStyle(color: Colors.white, fontSize: 20),
      );
    } else {
      centerContent = const SizedBox.shrink();
    }

    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              flex: 8,
              child: Center(
                // 이미지 전환 애니메이션
                child: AnimatedSwitcher(
                  duration: const Duration(milliseconds: 300),
                  child: currentIndex == -1
                      ? centerContent // 준비 또는 종료 메시지
                      : Image.asset(
                    currentImageList[currentIndex],
                    key: ValueKey(currentImageList[currentIndex]),
                    fit: BoxFit.contain,
                  ),
                ),
              ),
            ),

            // 컨트롤 패널 영역
            Container(
              color: Colors.black,
              padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 12),
              child: Column(
                children: [
                  // 1. 속도 선택 및 메인 버튼 Row
                  Row(
                    children: [
                      // 느림
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Radio<SpeedMode>(
                            value: SpeedMode.slow,
                            groupValue: speed,
                            onChanged: (v) {
                              if (playerState == PlayerState.playing) return;
                              setState(() => speed = v!);
                            },
                            fillColor:
                            MaterialStateProperty.all<Color>(Colors.white),
                          ),
                          const Text("느림", style: TextStyle(color: Colors.white)),
                        ],
                      ),

                      // 빠름
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Radio<SpeedMode>(
                            value: SpeedMode.fast,
                            groupValue: speed,
                            onChanged: (v) {
                              if (playerState == PlayerState.playing) return;
                              setState(() => speed = v!);
                            },
                            fillColor:
                            MaterialStateProperty.all<Color>(Colors.white),
                          ),
                          const Text("빠름", style: TextStyle(color: Colors.white)),
                        ],
                      ),

                      // 메인 버튼 (재생/중지/재시작)
                      Expanded(
                        child: Center(
                          child: ElevatedButton(
                            onPressed: () {
                              if (playerState == PlayerState.idle) {
                                startPlayback();
                              } else if (playerState == PlayerState.playing) {
                                stopPlayback();
                              } else if (playerState == PlayerState.finished) {
                                restartPlayback();
                              }
                            },
                            style: ElevatedButton.styleFrom(
                              backgroundColor: playerState == PlayerState.playing
                                  ? Colors.grey
                                  : Colors.blueAccent,
                              foregroundColor: Colors.white,
                              padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
                            ),
                            child: Icon(
                              playerState == PlayerState.finished
                                  ? Icons.replay // 재시작 아이콘
                                  : playerState == PlayerState.playing
                                  ? Icons.stop_circle_outlined // 중지 아이콘
                                  : CupertinoIcons.arrowtriangle_right_fill, // 재생 아이콘
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),

                  const SizedBox(height: 16),

                  // 2. 웹툰 선택 라디오 버튼 Row (4개)
                  Row(
                    children: [
                      _buildWebtoonRadio(WebtoonType.webtoon0, "튜토리얼"),
                      _buildWebtoonRadio(WebtoonType.webtoon1, "각자의 디데이"),
                      _buildWebtoonRadio(WebtoonType.webtoon2, "수학 잘 하는 법"),
                      _buildWebtoonRadio(WebtoonType.webtoon3, "유일무이 로맨스"),
                      _buildWebtoonRadio(WebtoonType.webtoon4, "봄의 편지"),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}