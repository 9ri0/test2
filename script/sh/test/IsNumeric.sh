IsNumeric(){
if [ $# -ne 1 ]; then
  return 1
fi
echo "$1 IsNum"
expr "$1" + 1 >/dev/null 2>&1
if [ $? -ge 2 ]; then
return 1
fi
return 0
}
#結果が0になるときの終了ステータスは1
#結果が0以外になるときの終了ステータスは0
#計算できなかったときの終了ステータスは2
