## Part 4: Quiz time!


- What is the PATH environment variable used for in UNIX systems?
   -it is used every time we run a command in the terminal.

- On a UNIX computer, how do you stop a running process?
   - `Ctrl-C` if this doesn't work you need to get the PID. This can be done by using the top command to locate the process. Then you can run the kill command</br>
   kill - Kill a process by ID</br>
   killall - Kill a process by name


- Which command can you use to see which homebrew packages you've installed?
   - `brew list`

- On a UNIX computer, how do you find the process id of a running process?
  - You will need to open another terminal and use the  `top` or `ps` command.

- In a terminal, what does control-c do?
   -  `Control+C` is used to kill a process with the signal  SIGINT, and can be intercepted by a program so it can clean its self up
   before exiting, or not exit at all.

- What would be the result of typing the following commands?
  ```sh
  $ cd /Users/lucy
  $ mkdir one
  $ touch alpha
  $ cd one
  $ touch alpha
  $ pwd
  ```
   - You will be in your home directory called  lucy
   you then make a directory called one
   you then make a file in the lucy directory called alpha
   you will change into directory one
   then create a file called alpha
   pwd returns /Users/lucy/one

- How do you see which environment variables are set in your shell?
   -use the `env` command to see the default variable list.

- What keyboard shortcut do you use to perform a "Find" search in your editor?
   - `Cmd+f`
- How do you see which aliases you have in your shell?
  - `alias`
- When a terminal command completes, how can you tell if it was successful or not?
   - A green arrow at the beginning of the next command line - indicates the terminal command was successful. Also the `history`
   command will show you all the successful commands during the current session.

- What does your `~/.gitconfig` have in it? (paste the whole file here)
```
  [alias]
  co = checkout
  ci = commit
  st = status --short --branch
  l  = log --oneline --decorate --graph --relative-date --show-signature
  ls-untracked-files = !git-ls-files -o --exclude-standard
  ls-ignored-files = !git-ls-files --others -i --exclude-standard
  ls-modified-files = !git-ls-files -m
  [color]
  editor = atom --wait
  status = auto
  diff = auto
  branch = auto
  interactive = auto
  ui = auto
  pager = true
  [color "status"]
  added = green
  changed = yellow
  untracked = red
  [user]
  name = Stephani McGrath
  email = silentsoundz1977@gmail.com
  [core]
  excludesfile = ~/.gitignore
  autocrlf = false
  pager = less -F -X
  whitespace = fix,-indent-with-non-tab,trailing-space,cr-at-eol
  [apply]
  whitespace = fix
  [push]
  default = upstream
  [branch]
  autosetuprebase = always
  autosetupmerge = true
  [mergetool "diffmerge"]
  cmd = diffmerge --merge --result=$MERGED $LOCAL $BASE $REMOTE
  trustExitCode = false
  [rebase]
  autosquash = true
  [rerere]
  enabled = true
  autoupdate = true
  [help]
  autocorrect = 50
```

- What is the difference between a relative and absolute path?
   - An absolute path is defined as the specifying the location of a file or directory from the root directory. Relative path is defined as path related to the present working directory(pwd).

- Lets say you have the following file structure

  ```
  ~
  └── Projects
      ├── airbnb-for-llamas
      │   └── package.json
      └── facebook-for-mimes
          ├── README.md
          └── package.json
  ```

  And you were in the `facebook-for-mimes` folder. What command would you use to copy the `README.md` file to the `airbnb-for-llamas` folder?
   - `cp README.md ../airbnb-for-llamas`

- What keyboard shortcut do you use in your editor to quickly navigate to a file in the current project?
  -`open <fileName>`

- Give an example of a file or folder pattern you commonly add to a .gitignore file and why you add it  
   -`*.bin` also `node_modules` .gitignore ignores certain files and protects them from the public.
   
- What are the main differences between `Array.sort` and `Array.filter` in JavaScript?

   -`Array.sort` sorts the elements in a array and returns the original array.
   -`Array.filter` creates a new array with all elements that pass the test implemented by the provided function.

### Requirements

- [ ] __50:__ All questions are answered correctly.