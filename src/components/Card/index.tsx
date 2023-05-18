import { Container } from "./styles";
import qrCodeImg from '../../assets/image-qr-code.png'

export function Card(){
  return(
    <Container>
      <img src={qrCodeImg} alt="" />
      <h1>Improve your front-end skills by building projects</h1>
      <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </Container>
  )
}

