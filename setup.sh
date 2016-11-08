#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ~/.mozilla/firefox/
if [[ $(grep '\[Profile[^0]\]' profiles.ini) ]]
then PROFPATH=$(tr < profiles.ini -s '\n' '|' | sed 's/\[Profile[0-9]\]/\x0/g; s/$/\x0/; s/.*\x0\([^\x0]*Default=1[^\x0]*\)\x0.*/\1/; s/.*Path=\([^|]*\)|.*/\1/')
else PROFPATH=$(grep 'Path=' profiles.ini | sed 's/^Path=//')
fi

echo Linking user.js to $PROFPATH
rm ~/.mozilla/firefox/$PROFPATH/user.js
ln -s $DIR/firefox/user.js ~/.mozilla/firefox/$PROFPATH/user.js

echo Linking Sublime theme package
rm -rf ~/.config/sublime-text-3/Packages/Pisco
ln -s $DIR/sublime/themes/pisco ~/.config/sublime-text-3/Packages/Pisco

echo Installing Sublime plugins...
rm -rf ~/.config/sublime-text-3/Packages/Chain
ln -s $DIR/sublime/plugins/chain/ ~/.config/sublime-text-3/Packages/Chain

echo Linking new Sublime preferences...
rm ~/.config/sublime-text-3/Packages/User/Preferences.sublime-settings
rm ~/.config/sublime-text-3/Packages/User/Distraction\ Free.sublime-settings
rm ~/.config/sublime-text-3/Packages/User/Default\ \(Linux\).sublime-keymap
ln -s $DIR/sublime/settings/Preferences.sublime-settings ~/.config/sublime-text-3/Packages/User/Preferences.sublime-settings
ln -s $DIR/sublime/settings/Distraction\ Free.sublime-settings ~/.config/sublime-text-3/Packages/User/Distraction\ Free.sublime-settings
ln -s $DIR/sublime/settings/Default\ \(Linux\).sublime-keymap ~/.config/sublime-text-3/Packages/User/Default\ \(Linux\).sublime-keymap
