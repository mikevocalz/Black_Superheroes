import DomParser from 'dom-parser';

export function GetImage(content){
    const myRegexp = new RegExp(/<img.*?src="https:\/\/(.*?)"/);
    const match = myRegexp.exec(content);
    console.log(GetImage,  "http://" + match[1])
        if (match){
            return 'https://' + match[1]
         }
  }

  export function ContentSnippet(content){
     return content.split(/\s+/).slice(0, 10).join(" ") + "...";
  }


  export function TitleSnippet(content){
    return content.split(/\s+/).slice(0, 4).join(" ") ;
 }