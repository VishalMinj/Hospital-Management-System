# 🏥 Hospital Management System 
## ✨ Setup Process 
+ ### Frontend(React):
   #### Requiremets: Node.js

   1. Open your terminal/command line
   2. cd into the frontend directory
   3. Run command <code>npm i</code> to install the node modules.
      
      **Note:**\
      You need to add\
      <code>--proxy http://your-proxy-url:your-proxy-port</code>\
      if your using a proxy connection instead of
      cellular one.
   4. Add .env file in the frontend directory to
      add environmental variables
   5. Run <code>npm run dev</code> to run client

      
+ ### Backend(Django):
   #### Requiremets: Python

   1. Open your terminal/command line
   2. cd into the backend directory
   3. Create virtual environment with\
      <code>py -m venv venv</code>
   4. Activate virtual envirnment with\
      <code>venv/Scripts/activate</code>
   5. Install the required extensions with\
      <code>pip install -r requirements.txt</code>

      **Note:**\
      You need to add (after install)\
      <code>--proxy http://your-proxy-url:your-proxy-port</code>\
      if your using a proxy connection instead of
         cellular one.
   6. Add .env file in the backend directory to
      add environmental variables
   7. Run <code>py manage.py migrate</code> to setup database
   8. Run <code>py manage.py runserver</code> to run server

   <!-- Reminder To run pip install --upgrade setuptools for Razorpay -->