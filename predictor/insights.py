from s2t import Speech2Text
from sentAnal import Analyzer
import sys
import json

file_path = sys.argv[1]

def results(file_name):

    stt = Speech2Text()
    transcription = stt.process(file_name)
    print(transcription)
    analyzer = Analyzer()
    with open(f'{file_name}_results.json', 'w') as f:
        json.dump(analyzer.detect_emotion(transcription), f, indent=4)

results(file_path)