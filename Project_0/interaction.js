import { LightningElement } from "lwc";

export default class MainWebpage extends LightningElement
{

  //imagesTest = "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg";
  image1 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-1.jpg";
  image2 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-2.jpg?w=600";
  image3 = "https://cdn.pixabay.com/photo/2012/04/23/17/07/three-39116_1280.png";
  image4 = "https://numerograph.files.wordpress.com/2020/02/numerology-number-4-lucky-colors.jpg?w=600";
  image5 = "https://media.istockphoto.com/photos/3d-gold-white-number-5-five-isolated-white-background-picture-id518070002";


  connectedCallback()
  {
    /*
    for(let element of document.getElementById("testimg"))
    {
      console.log(this.imagesTest);
      element.setAttribute.src = this.imagesTest;
    }
    */
  }
}
