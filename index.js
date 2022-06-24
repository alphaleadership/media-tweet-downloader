
const fs=require("fs"),https=require("https")
fs.readdirSync("./images").forEach(file => {fs.rmSync("./images/"+file)})
function get(url, dest) {
  return new Promise((resolve, reject) => {
    // Check file does not exist yet before hitting network
    fs.access(dest, fs.constants.F_OK, (err) => {

        if (err === null) reject('File already exists');

        const request = https.get(url, response => {
            if (response.statusCode === 200) {
       
              const file = fs.createWriteStream(dest, { flags: 'wx' });
              file.on('finish', () => resolve());
              file.on('error', err => {
                file.close();
                if (err.code === 'EEXIST') reject('File already exists')
                else fs.unlink(dest, () => reject(err.message)); // Delete temp file
              });
              response.pipe(file);
            } else if (response.statusCode === 302 || response.statusCode === 301) {
              //Recursively follow redirects, only a 200 will resolve.
              get(response.headers.location, dest).then(() => resolve());
            } else {
              reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
            }
          });
      
          request.on('error', err => {
            reject(err.message);
          });
    });
  });
}



 

const list=(path)=>{return fs.readFileSync(path).toString().split("\n")}



const { TwitterScraper } = require("@tcortega/twitter-scraper");



// Tweet Metadata by tweet url.
async function getlink (url)  {
  try {
    const twtScraper = await TwitterScraper.create();
    const tweetMeta = await twtScraper.getTweetMeta(url);
   // console.log(tweetMeta);
    return tweetMeta
  } catch (error) {
    [].push(error);
  }
}





    


const error =[]

const downloadfile =function(path){
  const error =[]
  const bidule=list(path)
/**///console.log(array)

for (let index = 0; index < bidule.length; index++) {
    const element = bidule[index];
    setTimeout(() => {
     // dedup("./images")
     // 
     
     
     //var spinner = ora("Loading unicorns").start();
    // spinner.color = "white";
     //spinner.text = "download";
      var playlist = element.indexOf("https://");//https://pbs.twimg.com/media
      getlink(element).then((data)=>{
        user=element.split("/")[3]
        try {
          for (let i = 0; i < data.media_url.length; i++) {
            const elem = data.media_url[i].url
            console.log(elem)
            let ext=""
            var playlist = elem.indexOf("https://pbs.twimg.com/media");//https://pbs.twimg.com/media
            if(playlist!==-1){
                 ext=".mp4"
            }else{ext=".jpg"}
        get(elem.url,`./images/${user}.${index}${ext}`)
      .then(/*spinner.succeed(`${i}`)*/console.log("finish"))
      .catch((err)=>{//spinner.succeed(`${index}:${err}`)
        error.push(err);console.log(err)
    })    
        }
        } catch (error) {
            //console.log(error)
          
          // expected output: ReferenceError: nonExistentFunction is not defined
          // Note - error messages will vary depending on browser
        }
        
          
          })
      if(playlist!==-1){}
      else{
        //spinner.succeed(`${index}`)
      }
      
    }, 0)
   
}
}

  downloadfile("./"+"url_twitter.txt")

/*
array =fs.readdirSync("./images")
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  fs.renameSync("./images/"+element, `./images/${index}.jpg`);
}
*/
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */






