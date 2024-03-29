
# Online Driving Licensing
:rocket: [Link to website][https://online-driving-licencing.vercel.app/]

 **For Testing : Go to the hosted Link:**
               
               You can make your Id , Please check email in spam for otp
               You can use my Id as well for testing
               Email : amansinghbiuri@gmail.com
               Password : 1212



# how to set up
  
**Install Dependencies:**

     ```bash
     npm install
     cd server
     npm install
     cd ..
     npm run dev

     
**Set up env file as well**

     ```bash
     in Root directory create a .env file and add REACT_APP_BASE_URL = http://localhost:4000/api/v1 
     in ./server make a .env file and you have to signup to cloudinary , make a app password of you email
     MAIL_HOST = smtp.gmail.com
     MAIL_USER = /* The mail id you used to make a app password*/
     MAIL_PASS = /* Mail password*/
     JWT_SECRET = /* Write whatever you want*/
     FOLDER_NAME =  /* folder name you created on cloudinary*/
     CLOUD_NAME = /* cloud name of cloudinary*/
     API_KEY = /*Your API_KEy of cloudinary*/
     API_SECRET = /* your Api secret of cloudinary*/
     PORT = 4000
     you can add you mongodb url in ./server/config/database.js file .

