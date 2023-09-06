const axios = require('axios');

require('dotenv').config();

async function calculateDistance(origin,destination){
    try{
        const encodedOrigin = encodeURIComponent(origin);
        const encodedDestination = encodeURIComponent(destination);
        const res = await axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}&key=${process.env.API_KEY}`);
        const distance = res.data.rows[0].elements[0].distance.text;
        return distance;
    }
    catch(err){
        console.log(err);
    }
}

const place1 = "https://www.google.com/maps/place/17%C2%B039'04.4%22N+75%C2%B055'26.1%22E/@17.6512211,75.9213277,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.6512211!4d75.9239026?hl=en&entry=ttu"
const place2 = "https://www.google.com/search?client=ms-android-asus-tpin&sca_esv=563116082&sxsrf=AB5stBiJh9pWoinh69gFXplGuaL69tSv_Q:1694023181883&q=Rajhans+nagar,+Shivaji+Nagar+Bale&ludocid=2685953299702435253&lsig=AB86z5W-DLSx-S0EsWRhG3Xc261K&kgs=9231ba5d0786e125&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/2"

calculateDistance(place1,place2)
.then((distance)=>{
    console.log(distance);
})
.catch((err)=>{
    console.log(err);
})