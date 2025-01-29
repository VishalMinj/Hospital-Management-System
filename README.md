# 🏥 Hospital Management System 
<hr style="height: 1px;">

## ✨ Setup Process 

+ #### Frontend(React):
        Requiremets: Node.js

       1. Open your terminal/command line
       2. cd into the frontend directory
       3. Run command 'npm i' to install the node modules.
          Note: 
             You need to add 
             '--proxy http://your-proxy-url:your-proxy-port'
             if your using a proxy connection instead of
             cellular one.
       4. Add .env file in the frontend directory to
          add environmental variables
       5. Run 'npm run dev' to run client

      
+ #### Backend(Django):
        Requiremets: Python

       1. Open your terminal/command line
       2. cd into the backend directory
       3. Create virtual environment with
          'py -m venv venv'
       4. Activate virtual envirnment with
          'venv/Scripts/activate'
       5. Install the required extensions with
          'pip install -r requirements.txt'
          Note: 
             You need to add (after install)
             '--proxy http://your-proxy-url:your-proxy-port'
             if your using a proxy connection instead of
             cellular one.
       6. Add .env file in the backend directory to
          add environmental variables
       7. Run 'py manage.py migrate' to setup database
       8. Run 'py manage.py runserver' to run server