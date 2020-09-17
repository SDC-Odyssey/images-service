import React from 'react';
const faker = require('faker');
import { Container, TableRow, RatingsContainer, StarSvg, Rating, ReviewCount, SuperHostContainer, SuperHostSvg, SuperHostText, Location, ShareSvg, ShareText, HeartSvg, SaveText } from './style.Description.jsx';

const Description = (props) => {
  console.log('props in Description: ', props); //isSuperHost, rating, reviewCount, add location or get from Supra's service
  //if isSuperHost === true, return
  //else return
    const superHost = 'Superhost';
    const location = faker.lorem.sentence({'word_count': 2});
    const share = 'Share';
    const save = 'Save';
    return (
      <Container>
        <TableRow>
          <RatingsContainer>
            <StarSvg viewBox="3 3 18 18" aria-label="Star" aria-hidden="true" focusable="false">
            <path d="M20.83 9.15l-6-.52L12.46 3.08h-.92L9.18 8.63l-6 .52L2.89 10l4.55 4L6.08 19.85l.75.55L12 17.3l5.17 3.1.75-.55L16.56 14l4.55-4Z" />
            </StarSvg>
              <Rating>{props.rating}</Rating>
                <ReviewCount>{`(${props.rating})`}</ReviewCount>
          </RatingsContainer>
          <SuperHostContainer>
            <SuperHostSvg viewBox="0 0 14 24" role="presentation" aria-hidden="true"  focusable="false">
            <path d="m10.5 20.0005065c0 1.9326761-1.56704361 3.4994935-3.5 3.4994935s-3.5-1.5668174-3.5-3.4994935c0-1.9326762 1.5670426-3.5005065 3.5-3.5005065s3.5 1.5678303 3.5 3.5005065m-9.99486248-18.58757644-.00513752 8.13836018c0 .45796416.21682079.88992936.58880718 1.17090736l5.07730539 3.831699c.4870761.367971 1.16836618.367971 1.65647028.0009994l5.08141685-3.8266984c.3719859-.2789784.5898342-.7109444.5908612-1.16790827.0010271-1.75186288.0041101-6.21051146.0051391-8.14035983 0-.50396002-.4202834-.91292822-.9392158-.91292822l-11.11643181-.00699945c-.51790391-.00099942-.93818728.40796878-.93921487.91292823" fillRule="evenodd"/>
            <path d="m12 9.5-5-3.70124468 5-3.79875532zm-6.1292309 9.187485c-.52182677.3180834-.8707691.8762459-.8707691 1.5144379 0 .9937534.83703449 1.7980771 1.870162 1.7980771.81806646 0 1.50434636-.5065007 1.75946763-1.2095239z" fillRule="evenodd"/>
            <path d="m12 9.5-5 3.75-5-3.75v-7.5z" fillRule="evenodd"/>
            <path d="m7 24c-2.2060547 0-4-1.7939453-4-3.9990234 0-2.2060547 1.7939453-4.0009766 4-4.0009766s4 1.7949219 4 4.0009766c0 2.2050781-1.7939453 3.9990234-4 3.9990234zm0-7c-1.6542969 0-3 1.3466797-3 3.0009766 0 1.6533203 1.3457031 2.9990234 3 2.9990234s3-1.3457031 3-2.9990234c0-1.6542969-1.3457031-3.0009766-3-3.0009766zm.0039062-1.8242188c-.4560547 0-.9121094-.1064453-1.2617188-.3164062l-5.0458984-3.8642578c-.4697265-.3642578-.696289-.8525391-.696289-1.4951172v-8c.0009766-.3730469.1679688-.7529297.4580078-1.0429688.2900391-.2905273.6689453-.4570312 1.0410156-.4570312h.0019531 10.9990235c.7851562 0 1.5.7148438 1.5 1.5v7.9277344c-.0009766.6762695-.2421875 1.2177734-.6953125 1.5668945l-5.0009766 3.8325195c-.3505859.2333985-.8251953.3486328-1.2998047.3486328zm-5.5058593-14.1757812c-.1044922 0-.2324219.0625-.3330078.1635742-.1015625.1020508-.1650391.230957-.1650391.3374024v7.9990234c0 .3305664.0888672.5341797.3066406.703125l4.9970703 3.8310547c.3330078.1953125 1.0859375.2001953 1.4208984-.0205078l4.9716797-3.8125c.2001954-.1542969.3027344-.4155274.303711-.7749024v-7.9267578c0-.2285156-.2714844-.4995117-.5-.4995117h-11-.0009766s0 0-.0009765 0z" fillRule="evenodd"/>
            </SuperHostSvg>
              <SuperHostText>{superHost}</SuperHostText>
          </SuperHostContainer>
          <Location>{location}</Location>
          <ShareSvg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
          <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9" fillRule="nonzero"/>
          <path d="M16 3v23V3z" fillRule="nonzero"/>
          <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13" fillRule="nonzero"/>
          </ShareSvg>
          <ShareText>{share}</ShareText>
          <HeartSvg viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false">
          <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" fillRule="nonzero"/>
          </HeartSvg>
          <SaveText>{save}</SaveText>
        </TableRow>
      </Container>
    );
}


export default Description;