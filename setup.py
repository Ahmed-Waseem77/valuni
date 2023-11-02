#AW:
#this file autogenerates the fdev.js file in the src folder 
#to avoid merge conflicts when each dev is testing their own components 
#This file is to be run when first cloning the repo or when the default component is to be changed  

#The generated file is not tracked and is set in the gitignore file 

#There is a need for a better way to do this but this is the best I could come up with for now, i am particularly not fond of having to change default components manually here.

devFile = open("valuni_wd/src/fdev.js", "w") 

devFile.write( """ 
import { LoginPage } from './login/LoginPage.js'; 
//IMPORT YOUR COMPONENTS HERE 
  
//
  
 
//DISPLAY YOUR COMPONENTS HERE INSTEAD OF THE LOGIN PAGE 
var devComponent = ( <LoginPage />);
export {devComponent}; 
""" )  

print("\033[1;32m \n written fdev.js") 
print("\033[1;37m change devComponent to test your desired react components in valuni_wd/src/fdev.js\n")
