import React from 'react';
import '../css/Landing-Page.css'
import '../components/Jataka'
import Jataka from '../components/Jataka';
import { useEffect, useState } from 'react';
import Mudhras from '../components/Mudhras';


export default function LandingPage()
{
    const data = [
        {
          id:   1,
          title: 'The Future Buddha as a Wise Judge',
          content: `A woman, carrying her child, went to the future Buddha's tank to wash. And having first bathed the child, she put on her upper garment and descended into the water to bathe herself.

          Then a Yakshini, seeing the child, had a craving to eat it. And taking the form of a woman, she drew near, and asked the mother, "Friend, this is a very pretty child. Is it one of yours?" And when she was told it was, she asked if she might nurse it. And this being allowed, she nursed it a little, and then carried it off.
          
          But when the mother saw this, she ran after her, and cried out, "Where are you taking my child to?" and caught hold of her.
          
          The Yakshini boldly said, "Where did you get the child from? It is mine!" And so quarreling, they passed the door of the future Buddha's Judgment Hall.
          
          He heard the noise, sent for them, inquired into the matter, and asked them whether they would abide by his decision. And they agreed. Then he had a line drawn on the ground; and told the Yakshini to take hold of the child's arms, and the mother to take hold of its legs; and said, "The child shall be hers who drags him over the line."
          
          But as soon as they pulled at him, the mother, seeing how he suffered, grieved as if her heart would break. And letting him go, she stood there weeping.
          
          Then the future Buddha asked the bystanders, "Whose hearts are tender to babes? Those who have borne children, or those who have not?"
          
          And they answered, "Oh sire! The hearts of mothers are tender."
          
          Then he said, "Who, think you, is the mother? She who has the child in her arms, or she who has let go?"
          
          And they answered, "She who has let go is the mother."
          
          And he said, "Then do you all think that the other was the thief?"
          
          And they answered, "Sire! We cannot tell."
          
          And he said, "Verily, this is a Yakshini, who took the child to eat it."
          
          And he replied, "Because her eyes winked not, and were red, and she knew no fear, and had no pity, I knew it."
          
          And so saying, he demanded of the thief, "Who are you?"
          
          And she said, "Lord! I am a Yakshini."
          
          And he asked, "Why did you take away this child?"
          
          And she said, "I thought to eat him, Oh my Lord!"
          
          And he rebuked her, saying, "Oh foolish woman! For your former sins you have been born a Yakshini, and now do you still sin!" And he laid a vow upon her to keep the Five Commandments, and let her go.
          
          But the mother of the child exalted the future Buddha, and said, "Oh my Lord! Oh great physician! May your life be long!" And she went away, with her babe clasped to her bosom.`,
        moral : `As per the Jataka, we are constantly reminded that parents form our caregivers, providers and the beings who cherish our success the most\n They work day and night to 
                flavour and make our lives comfortable. 
                And hence, it befalls on us as a core responsibility that we take care of them - through sickness, through pain, and through every other weak time.\n
                The Buddha advised people to honor parents as the Brahmā, the supreme god and the creator of human beings in Hinduism, as parents have done much for their children.`,
        videoUrl : `../vid.mp4`
        
                },
        {
          id:   2,
          title: 'Mahāvāõijajātaka',
          moral : `We should not harm life unjustly in any form and greed will only lead to harm. We should be thankful for what we have and help the poor. \nViolence cannot be stopped with more violence but will lead to an endless cycle 
          `,
          content : `This jataka narrates events of the past life of the Buddha during ancient times. One day a King traveling with a few of his men gets lost in a forest. After wandering in the forest for a long time, they get starving and thirsty. \n After wandering around some more, they meet an ascetic in the forest, none other than the Buddha himself from a past life. The king and his men request buddha for some food and water. The Buddha tells them he has none, but he tells them to follow him to a magical tree near a lake. \nUpon reaching the tree, the Buddha tells the king and his men they can have as much fruit as they want but forbids them from harming animals or cutting down trees. After the Buddha leaves, the King and his men eat and drink to their fill. \nThe King ignores the Buddha's warning upon nightfall and asks his men to bring him some meat. The men hunt and cook rabbits and birds for the king, and they feast on them. This frightens all the nearby animals, who then run for safety. \nThe King then asks his men to uproot the tree so he can take it back. In the meantime, the escaped animals seek help from their king, the lion. Upon hearing their complaints, the lion gets enraged and teaches the greedy king a lesson. The lion then attacks the king and his men. At the last minute buddha appears again, and intervenes, telling the lion that violence will only lead to more violence. \nHe then makes the king realise his mistake, and then the king says “Greed is truly a curse and animals and plants should not be harmed as we share this earth with them’. The king then promises to not repeat his mistake. Hearing this the lion leaves while warning them one last time.
          `,
          videoUrl : `../waiz.mp4`
        }
    ]

    const [currentJataka, setCurrentJataka] = useState(data[0])

    const [currentMudhra, setCurrentMudhra] = useState(-1)
    const mudhras= [
        {
            id :1,
            name:`Dhayana Mudhra - Peace and Meditation`,
            content:`Dhyana Mudra is a hand gesture that embodies the mind to go deep into meditation, to reflect and contemplate. The use of both hands in this mudra keeps all the fingers active, hence bringing a balance in all the five elements
                    \nHow do we do this?
                    1) Relax your arm \n 2)Place your elbows at 90 degrees angle\n 3) Place one hand against the other`,
            url:`../../images/dhyana.gif`
        },
        {
            id :2,
            name:`Abhaya Mudhra - Fearlessness`,
            content:` The Abhaya mudra (mudra of no-fear) represents protection, peace, benevolence, and dispelling of fear.This is a gesture of safety and courage. In early times, people use this gesture to greet strangers.
                    \n How do we do this?
                    1) Relax your arm \n 2)Bring up your elbow\n 3) Open the palm to face the world`,
            url:`../../images/abhaya.jpeg`
        }
    ]

    const [isHome, setisHome] = useState(true)
    
    const handlePrevious = () => {
        let old = currentJataka
        if (isHome){
            setCurrentJataka(data[(old.id-1)-1])
            return

        }else{
            setCurrentMudhra(currentMudhra-1)
        }
        
    };
   

    const handleNext = ()=>{
        let old = currentJataka
        //console.log("old isfmvrmf ", old)
        if(isHome){
            setCurrentJataka(data[(old.id-1)+1])
        
        return

        }else{
            setCurrentMudhra(currentMudhra+1)
        }
        

    }

    const handleTabMudhra = ()=>{
        console.log("old ishome was", isHome)
        setisHome(false)

    }
    const handleTabJatakas = ()=>{
        setisHome(true)

    }
    
      

    return (
        <>
        <body>
            <div id = "container">
                <div id="menu">
                    <ul>
                    <button onClick={handleTabJatakas} style = {{background:"transparent", border:"none"}}><li class="current_page_item"><a >Jatakas</a></li></button>
                    <button onClick={handleTabMudhra} style = {{background:"transparent", border:"none"}}><li class="current_page_item"><a>Mudhras</a></li></button>
                    
                    </ul>
                </div>
                
                {
                    isHome &&
                    <div id="wrapper">
                        <div id="page-wrapper">
                            <div id = "page">
                                <div id="header">
                                    <h1><a href="">My Book of Jatakas</a></h1>
                                    <div id="description">Quiet the mind, and the soul will speak</div>
                                </div>
                                <Jataka id = {currentJataka.id} title = {currentJataka.title} total = {data.length} content = {currentJataka.content} moral = {currentJataka.moral} videoUrl = {currentJataka.videoUrl} handleNext = {handleNext} handlePrevious = {handlePrevious}></Jataka>
                                <div id="narrowcolumn-wrapper">&nbsp;</div>
                            </div>
                            
                        
                        </div>
                        <div id="sidebar">
                            <ul>
                                <li>
                                <img src="images/buddha.png" alt="" width="100%" height="152" align="center" /> 
                                </li>
                                <li>
                                    <h2>Be Buddha's favourite</h2>
                                    <ul>
                                        <li>Your body is precious. It is your vehicle for awakening; treat it with care</li>
                                    </ul>
                                </li>
                                <li>
                                    <h2>Pancha Sila</h2>
                                    <ul  >
                                        <li style={{ listStyleType: "square" }}>I observe, refraining from killing any living beings</li>
                                        <li style={{ listStyleType: "square" }}>I observe, refraining from taking what the owner does not give</li>
                                        <li style={{ listStyleType: "square" }}>I observe, refraining from committing sexual misconduct</li>
                                        <li style={{ listStyleType: "square" }}>I observe, refraining from telling lies</li>
                                        <li style={{ listStyleType: "square" }}>I observe, refraining from taking any intoxicant or drug</li>

                                    </ul>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                }
                {
                    isHome==false &&
                    <div id="wrapper">
                    <div id="page-wrapper">
                        <div id = "page">
                            <div id="header">
                                <h1><a href="">My book of Jatakas</a></h1>
                                <div id="description">Quiet the mind, and the soul will speak</div>
                            </div>
                            {console.log("current mudhra is   equal",mudhras.length)}
                            {console.log("current mudhra id is   equal",currentMudhra)}
                            {
                                
                                currentMudhra >=0 &&
                                <Mudhras id = {currentMudhra} title = {mudhras[currentMudhra].name} content = {mudhras[currentMudhra].content} url = {mudhras[currentMudhra].url} handleNext = {handleNext} handlePrevious = {handlePrevious} total = {mudhras.length}></Mudhras>

                            }
                            {
                                currentMudhra == -1 &&
                                <Mudhras id = {currentMudhra} title = {""} content = {""} url = {""} handleNext = {handleNext} handlePrevious={handlePrevious} total = {mudhras.length}></Mudhras>
                            }
                            
                            <div id="narrowcolumn-wrapper">&nbsp;</div>
                        </div>
                        
                       
                    </div>
                    <div id="sidebar">
                        <ul>
                            <li>
                            <img src="images/buddha.png" alt="" width="100%" height="152" align="center" /> 
                            </li>
                            <li>
                                <h2>Be Buddha's favourite</h2>
                                <ul>
                                    <li>Your body is precious. It is your vehicle for awakening; treat it with care</li>
                                </ul>
                            </li>
                            <li>
                                <h2>Pancha Sila</h2>
                                <ul  >
                                    <li style={{ listStyleType: "square" }}>I observe, refraining from killing any living beings</li>
                                    <li style={{ listStyleType: "square" }}>I observe, refraining from taking what the owner does not give</li>
                                    <li style={{ listStyleType: "square" }}>I observe, refraining from committing sexual misconduct</li>
                                    <li style={{ listStyleType: "square" }}>I observe, refraining from telling lies</li>
                                    <li style={{ listStyleType: "square" }}>I observe, refraining from taking any intoxicant or drug</li>

                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                    </div>

                }
                <div id="footer">
                    <p>Design by : <a href="http://www.searchopedia.org/">Searchopedia</a></p>
                </div>

            </div>
        </body>
           
        </>
    )
}