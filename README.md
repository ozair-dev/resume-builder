## This web app lets you generate resumes according to the information you provide to it, you can customize the colors and font of the resumes (or add more tweaks to it if you know about chrome dev tools:) ) and easily download them in the pdf format
----

### here are some example resumes generated with this app
![1](https://user-images.githubusercontent.com/65649182/207802234-588e8808-ab12-460a-8a86-11711d369f57.png)
![2](https://user-images.githubusercontent.com/65649182/207802215-9dd40f81-ca16-4f9a-86d9-fa40e6656d79.png)
![3](https://user-images.githubusercontent.com/65649182/207802209-3a9cfaba-b34d-4aad-9ef9-4b4943f3b7a0.png)

# Usage
1. In the edit page, you can fill the information and click save. You can also export the information as a JSON file to your own device and can import it again in the app, so you don't have to re-enter all the information.
   ![import](https://user-images.githubusercontent.com/65649182/207802222-356b9eb4-e460-4249-81d8-d9807a086092.png)
   ![export](https://user-images.githubusercontent.com/65649182/207802218-50fd7450-9da8-42b6-9615-a8bd0f4a3653.png)
2. After you have saved the information, click the button ```CREATE YOUR RESUME``` and it will take you to the resume template
3. You can pull down the tools bar which allows you to change theme colors and fonts, you can navigate through resumes by clicking the navigation links. You will find other useful stuff like pdf download button and edit button there.
![tools](https://user-images.githubusercontent.com/65649182/207802228-0416d9a7-2412-4543-a2a2-595cc5ea457d.png)

If you find/face any problem in the app, please open an issue and I'll try to fix it.
If you want a new design to be added in the app, then open an issue and provide the design. If it is good enough, I may create a template for it and add to the app

# Troubleshooting
In most browsers,you will see the
- headers and footer on the resume when you are saving it,
- background colors disappearing
- extra padding between the actual page and the resume.
To fix this, expand the ```more settings``` menu and follow these steps
1. set **margins** to **none**
2. **uncheck** the **headers and footers** box
3. **check mark** the **background graphics** box.

here is an example
![Screenshot from 2022-12-15 12-42-55](https://user-images.githubusercontent.com/65649182/207802669-1e8ba63a-ab37-4baa-86fb-22bc131da0a9.png)



# Contributing
If you want to add a new template or fix some issue, then please make sure that:
1. Everything you modify/add should be responsive, from font sizes, to width and heights, to border sizes etc, and use "vw" unit for it, even to set the height of an elemenet, you have to use "vw" unit to keep it consistant accross different screen sizes.
2. To make it easy for you to modify font size, I'hv added typography variants such as ```xx-small```,```x-small```,```small```,```medium```,```large```,```x-large```,```xx-large``` and you will use them like so

   ```<Typography variant="small">Some Text</Typography>```
3. Other than that, you have to resize other stuff manually
4. You can get the information stored in the localStorage with the key "info"
5. If you want to add the social Icons, use the <SocialIcon /> component which is exported as default from the file ```src/SocialIcon```. Pass the ```url```, ```width``` and ```height``` style props to it.
6. To use a font awesome icon, here is how you will import ```import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";``` and pass the icon prop to it.
7. When adding a new template, add import it in the index file of the **Templates** folder and add it to the **export array which already contains the previous templates**