import Flippy, { FrontSide, BackSide } from 'react-flippy';


type Props = {
  cardFront: React.ReactNode;
  cardBack: React.ReactNode;
  colorFront?: String;
  colorBack?: String;
  width?: String;
  height?: String;
};
export default function Card(props: Props) {
  const width = props.width? props.width: "fit-content";
  const height = props.height? props.height: "fit-content";

  return (

    <Flippy
      flipOnHover={true} // default false
      flipOnClick={false} // default false
      flipDirection="horizontal" // horizontal or vertical
      
    >
      <FrontSide style={{borderRadius: "25px",textAlign:"center",  height: height, width: width, backgroundColor: props.colorFront ? `${props.colorFront}` : "#FFFF" }}>
        {props.cardFront}
      </FrontSide>
      <BackSide
        style={{ borderRadius: "25px",textAlign:"center", height: height, width: width, backgroundColor: props.colorBack ? `${props.colorBack}` : "#dbdbdb" }}
      >
        {props.cardBack}
      </BackSide>
    </Flippy >

  );
}