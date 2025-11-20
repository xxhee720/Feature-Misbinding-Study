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

enum PlayerState { idle, playing, finished }
enum SpeedMode { slow, fast }
enum WebtoonType { letter, dday }

class ViewerPage extends StatefulWidget {
  @override
  State<ViewerPage> createState() => _ViewerPageState();
}

class _ViewerPageState extends State<ViewerPage> {
  PlayerState playerState = PlayerState.idle;
  SpeedMode speed = SpeedMode.slow;
  WebtoonType webtoon = WebtoonType.letter;

  List<String> letterImages =
  List.generate(15, (i) => "assets/images/a${i + 1}.png");
  List<String> ddayImages =
  List.generate(11, (i) => "assets/images/b${i + 1}.png");

  int currentIndex = -1;
  Timer? playbackTimer;

  int get delayMs => speed == SpeedMode.slow ? 3000 : 1500;

  List<String> get currentImageList =>
      webtoon == WebtoonType.letter ? letterImages : ddayImages;

  @override
  void dispose() {
    playbackTimer?.cancel();
    super.dispose();
  }

  void startPlayback() {
    setState(() {
      playerState = PlayerState.playing;
      currentIndex = 0;
    });

    startTimer();
  }

  void stopPlayback() {
    playbackTimer?.cancel();
    setState(() {
      currentIndex = -1;
      playerState = PlayerState.idle;
    });
  }

  void restartPlayback() {
    setState(() {
      playerState = PlayerState.playing;
      currentIndex = 0;
    });
    startTimer();
  }

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

  @override
  Widget build(BuildContext context) {
    Widget centerContent;

    if (playerState == PlayerState.idle) {
      centerContent = const Text(
        "Ready",
        style: TextStyle(color: Colors.white, fontSize: 20),
      );
    } else if (playerState == PlayerState.finished) {
      centerContent = const Text(
        "End of Webtoon",
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
                child: AnimatedSwitcher(
                  duration: Duration(milliseconds: 300),
                  child: currentIndex == -1
                      ? centerContent
                      : Image.asset(
                    currentImageList[currentIndex],
                    key: ValueKey(currentImageList[currentIndex]),
                    fit: BoxFit.contain,
                  ),
                ),
              ),
            ),

            Container(
              color: Colors.black,
              padding: const EdgeInsets.symmetric(vertical: 16, horizontal: 12),
              child: Row(
                children: [
                  // slow
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Radio(
                          value: SpeedMode.slow,
                          groupValue: speed,
                          onChanged: (v) {
                            if (playerState == PlayerState.playing) return;
                            setState(() => speed = v!);
                          },
                          fillColor:
                          MaterialStateProperty.all<Color>(Colors.white),
                        ),
                        const Text("slow", style: TextStyle(color: Colors.white)),
                      ],
                    ),
                  ),

                  // fast
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Radio(
                          value: SpeedMode.fast,
                          groupValue: speed,
                          onChanged: (v) {
                            if (playerState == PlayerState.playing) return;
                            setState(() => speed = v!);
                          },
                          fillColor:
                          MaterialStateProperty.all<Color>(Colors.white),
                        ),
                        const Text("fast", style: TextStyle(color: Colors.white)),
                      ],
                    ),
                  ),

                  // main button
                  ElevatedButton(
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
                    ),
                    child: Icon(
                      playerState == PlayerState.finished
                          ? Icons.replay
                          : playerState == PlayerState.playing
                          ? Icons.stop_circle_outlined
                          : CupertinoIcons.arrowtriangle_right_fill,
                    ),
                  ),

                  const SizedBox(width: 8),

                  // 웹툰1
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Radio(
                          value: WebtoonType.letter,
                          groupValue: webtoon,
                          onChanged: (v) {
                            if (playerState == PlayerState.playing) return;
                            setState(() => webtoon = v!);
                          },
                          fillColor:
                          MaterialStateProperty.all<Color>(Colors.white),
                        ),
                        const Text("웹툰1", style: TextStyle(color: Colors.white)),
                      ],
                    ),
                  ),

                  // 웹툰2
                  Expanded(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Radio(
                          value: WebtoonType.dday,
                          groupValue: webtoon,
                          onChanged: (v) {
                            if (playerState == PlayerState.playing) return;
                            setState(() => webtoon = v!);
                          },
                          fillColor:
                          MaterialStateProperty.all<Color>(Colors.white),
                        ),
                        const Text("웹툰2",
                            style: TextStyle(color: Colors.white)),
                      ],
                    ),
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
