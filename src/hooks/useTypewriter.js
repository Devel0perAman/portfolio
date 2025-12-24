import { useState, useEffect } from "react";

export default function useTypewriter(words, speed = 100, pause = 1500) {
    const [index, setIndex] = useState(0);
    const [text, setText] =useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = words[index % words.length];
        let timer;

        if(!isDeleting && text.length < current.length) {
            timer = setTimeout(() => setText(current.slice(0, text.length+1)),
            speed
        );
        } else if(isDeleting && text.length > 0) {
            timer = setTimeout(() => setText(current.slice(0, text.length-1)),
            speed/2);
        } else if(!isDeleting && text.length === current.length) {
            timer = setTimeout(() => setIsDeleting(true), pause);
        } else if(isDeleting && text.length === 0) {
            setIsDeleting(false);
            setIndex(prev=>prev+1);
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting,index,words,speed,pause]);
    return text;
}