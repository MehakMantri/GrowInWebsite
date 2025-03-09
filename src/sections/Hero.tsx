"use client"
import Button from "@/components/Button";
import Image from "next/image";
import { section } from "framer-motion/client";
import designExample1Image from '@/assets/images/design-example-1.png';
import designExample2Image from '@/assets/images/design-example-2.png';
import Pointer from "@/components/Pointer";
import {motion, useAnimate} from 'framer-motion'
import { useEffect } from "react";
import cursorYouImage from '@/assets/images/cursor-you.svg'
import { url } from "inspector";
export default function Hero() {
    const [leftDesignScope, leftDesignAnimate]= useAnimate();
    const [leftPointerScope, leftPointerAnimate]= useAnimate();
    const [rightDesignScope,rightDesignAnimate]=useAnimate();
    const [rightPointerScope, rightPointerAnimate]= useAnimate();
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, {opacity:[1]},{duration:0.5}],
            [leftDesignScope.current,{y:0,x:0},{duration:0.5}]
        ]);
        leftPointerAnimate([
            [leftPointerScope.current,{opacity:1},{duration:0.5}],
            [leftPointerScope.current,{y:0, x:-100},{duration:0.5,delay: 0.5 }],
            [leftPointerScope.current,{x: 0 ,y: [0,16,0]},{duration: 0.5,ease: "easeInOut"},]
        ]);
        rightDesignAnimate([
            [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        
        rightPointerAnimate([
            [rightPointerScope.current,{opacity:1},{duration:0.5,delay:1.5}],
            [rightPointerScope.current,{y:0, x:175},{duration:0.5}],
            [rightPointerScope.current,{x: 0 ,y: [0,20,0]},{duration: 0.5},]
        ]);

    }, []);
    return (
        <section className="py-24 overflow-x-clip" style={{cursor:`url(${cursorYouImage.src}),auto`}}>
            <div className="container relative">
                <motion.div ref={leftDesignScope}
                initial={{opacity:0 ,y:100,x:-100}} 
                drag
                className="absolute -left-64 top-16 hidden lg:block">
                    <Image 
                    src={designExample1Image}
                    alt="design example 1 image" 
                    draggable="false"
                    />
                </motion.div>
               
                <motion.div 
                ref={rightDesignScope} 
                initial={{opacity:0 ,y:100,x:100}}
                drag
                className="absolute -right-56 -top-16 hidden lg:block ">
                    <Image
                    src={designExample2Image}
                    draggable="false"
                    alt="design example 2 image"></Image>
                </motion.div>

             
                <motion.div 
                ref={leftPointerScope}
                initial={{opacity:0 ,y:100,x:100}}
                className="absolute top-96 left-48 hidden lg:block ">
                    <Pointer name="Andrea" />
                </motion.div>
                <motion.div ref={rightPointerScope}
                initial={{opacity:0 ,y:100,x:275}} className="absolute right-56 hidden lg:block">
                    <Pointer name="Bryan" color="red" />
                </motion.div>

                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨ $7.5M seed round raised
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                    Impactful design, created effortlessly
                </h1>
                <div className="flex justify-center items-center">
  <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
    Design tools shouldn&apos;t slow you down. Layers combine powerful features with an intuitive interface that keeps you in your creative flow.
  </p>
</div>

                {/* Fixed Form */}
                <form className="flex items-center border border-white/15 rounded-full p-2 mt-8 w-full max-w-lg mx-auto ">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="bg-transparent px-4 flex-grow outline-none w-full"
                    />
                    <Button 
                        type="submit" 
                        variant="primary" 
                        className="whitespace-nowrap shrink-0 px-4 py-2"
                        size="sm"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
        </section>
    );
}
