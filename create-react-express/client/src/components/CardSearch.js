import React from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle, } from "reactstrap";


const SearchCard = (props) => {
  return (
   
    <div>
      <Card>
        <CardImg top width="100%" height="250px" src="https://news.otakukart.com/wp-content/uploads/2019/02/Boku-No-Hero-Academia-Season-4-Release-Date.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>TITLE: Boku No Hero Academia </CardTitle>
          <CardText>DESCRIPTION: Enduring many months of grueling training, Izuku enrolls in UA High, a prestigious high school famous for its excellent hero training program, and this year's freshmen look especially promising. With his bizarre but talented classmates and the looming threat of a villainous organization, Izuku will soon learn what it really means to be a hero.</CardText>
        </CardBody>
      </Card>
      <br></br>
      <Card>
        <CardImg top width="100%" src="https://dw9to29mmj727.cloudfront.net/promo/2016/5256-SeriesHeaders_OPM_2000x800.jpg" alt="Card image cap" />
        <CardBody>
        <CardTitle>TITLE: One Punch Man</CardTitle>
          <CardText>DESCRIPTION: Before Saitama became the man he is today, he trained and fought endlessly to become a hero. While every scuffle leaves his tracksuit uniform in tatters, he always has it mended for free thanks to his local tailor. One day, however, the tailor informs him that he must close up shop due to pressure from a local gang. Saitama decides to help him out—and gains something irreplaceable in the process.</CardText>
        </CardBody>
      </Card>
      <br></br>
      <Card>
        <CardImg top width="100%" height="250px" src="https://i.ytimg.com/vi/tLsJ4aPz1QY/maxresdefault.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>TITLE: Inuyashiki Last Hero</CardTitle>
          <CardText>DESCRIPTION: Ichirou Inuyashiki is a 58-year-old family man who is going through a difficult time in his life. Suddenly, a bright light appears and Ichirou is enveloped by smoke and dust. When he comes to, he discovers something is amiss—he has been reborn as a mechanized weapon wearing the skin of his former self. Who was the mysterious figure at the site of the explosion, and are they as kind as Ichirou when it comes to using this dangerous gift?</CardText>
        </CardBody>
      </Card>
      <br></br>
      <Card>
        <CardImg top width="100%" height="250px" src="https://media.comicbook.com/2018/11/hero-mask-netflix-anime-1142355-1280x0.jpeg" alt="Card image cap" />
        <CardBody>
          <CardTitle>TITLE: Hero Mask</CardTitle>
          <CardText>DESCRIPTION: There's a mysterious Mask before James Blood, and the man behind it is one that shouldn't exist. What is the mystery surrounding this mask...? So begins an action-packed crime story set in a beautiful city! </CardText>
        </CardBody>
      </Card>
      <br></br>
      <Card>
      <CardImg top width="100%" height="250px" src="https://i.ytimg.com/vi/mxFaW8OVE40/maxresdefault.jpg" alt="Card image cap" />
      <CardBody>
        <CardTitle>TITLE: Hitorijime My Hero</CardTitle>
          <CardText>DESCRIPTION: Masahiro and his former friend, Kensuke Ooshiba, attend high school, only to find that Kousuke is their math teacher. Masahiro starts to view Kousuke as his "hero," and Kousuke develops an urging desire to protect Masahiro.  Will the three boys be able to live a regular high school life? Or will forbidden love keep them apart forever?</CardText>
          </CardBody>
      </Card>
    </div>

  );
};

export default SearchCard;