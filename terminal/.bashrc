[ -z "$PS1" ] && return

export HISTCONTROL=ignoredups

shopt -s histappend

umask 077

alias c='clear'
alias mkdir='mkdir -pv'
alias less='less -r'
alias rm='rm -i'
alias mv='mv -i'
alias cp='cp -i'
alias whence='type -a'
alias ls='ls -F --color=auto'
alias ll='ls -l'
alias grep='grep --color=auto --exclude-dir=\.git'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

mcd ()
{
    mkdir $1
    cd $1
}

parse_git_branch ()
{
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

pull ()
{
    if parse_git_branch; then
        git pull origin parse_git_branch
    fi
}

push ()
{
    if parse_git_branch; then
        git push origin parse_git_branch
    fi
}

clone ()
{
    git clone https://github.com/$1
}

