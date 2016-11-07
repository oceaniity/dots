#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ~/.mozilla/firefox/
if [[ $(grep '\[Profile[^0]\]' profiles.ini) ]]
then PROFPATH=$(tr < profiles.ini -s '\n' '|' | sed 's/\[Profile[0-9]\]/\x0/g; s/$/\x0/; s/.*\x0\([^\x0]*Default=1[^\x0]*\)\x0.*/\1/; s/.*Path=\([^|]*\)|.*/\1/')
else PROFPATH=$(grep 'Path=' profiles.ini | sed 's/^Path=//')
fi

echo Removing user.js from $PROFPATH
rm ~/.mozilla/firefox/$PROFPATH/user.js

echo Linking user.js to $PROFPATH
ln -s $DIR/firefox/user.js ~/.mozilla/firefox/$PROFPATH/user.js

echo Removing original Sublime preferences...
rm ~/.config/sublime-text-3/Packages/User/Preferences.sublime-settings
rm ~/.config/sublime-text-3/Packages/User/Distraction\ Free.sublime-settings

echo Linking new Sublime preferences...
ln -s $DIR/sublime/Preferences.sublime-settings ~/.config/sublime-text-3/Packages/User/Preferences.sublime-settings
ln -s $DIR/sublime/Distraction\ Free.sublime-settings ~/.config/sublime-text-3/Packages/User/Distraction\ Free.sublime-settings
