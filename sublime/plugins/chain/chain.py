import sublime
import sublime_plugin

class ChainCommand(sublime_plugin.WindowCommand):
    def run(self, commands):
        window = self.window
        for command in commands:
            name = command[0]
            args = command[1:]
            window.run_command(name, *args)
