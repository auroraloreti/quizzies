import { useEffect } from "react";
import { useLocation} from "react-router-dom";



export default function Home() {
    const { hash } = useLocation();

  useEffect(() => {
    console.log("ciao");
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        console.log(element);
        console.log(hash);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  useEffect(() => {
    console.log("ciao")
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        console.log(element)
        console.log(hash)
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
    return(
        <>
       
        </>
    )
}