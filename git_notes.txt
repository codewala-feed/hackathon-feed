===================================================================
            Your Laptop
===================================================================
git clone https://github.com/your/repolink.git
===================================================
git checkout -b backend
====develop your work====
git add .
git commit -m "backend day1"
   git config --global user.email "your@gmail"
   git config --global user.name "your username"
git commit -m "backend day1"
git push -u origin backend
   ==provide authorization after typing code in the link==
==================================
git checkout main
git merge backend
git push -u origin main
==================================
===send a collaborator request to your friend===


===================================================================
            Collaborator's Laptop
===================================================================
git clone https://github.com/your/repolink.git
====================================================
git checkout -b frontend
====develop your work====
git add .
git commit -m "frontend day1"
   git config --global user.email "your@gmail"
   git config --global user.name "your username"
git commit -m "frontend day1"
git push -u origin frontend
   ===provide authorization after typing code in the link===
===================================
git checkout backend
git merge frontend
git push -u origin backend
===============
git checkout main
git merge frontend
===================================

     ==To get Updated Code in VS Code==
git pull
