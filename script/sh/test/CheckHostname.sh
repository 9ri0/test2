
CheckHostname(){
  _PING=
  _HOST=${1:-`hostname`}

  case `uname -s` in
    Linux ) _PING="ping -c1 $_HOST" ;;#Linux
    * ) return 1 ;;
  esac
echo "hoaaaaaaffafasdf"
 if [ `$_PING 2>&1 | grep -ci "Unknown host"` -eq 0 ]
  then
    return 0
  else
    return 1
  fi
}
