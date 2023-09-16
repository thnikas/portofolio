import { TypeAnimation } from 'react-type-animation';
 
export const TypeAnimationCom = () => {
  return (
    <TypeAnimation
      sequence={[
        'Web sites', // Types 'One'
        2000, // Waits 1s
        '{δƒ░/*', // Types 'One'
        1, // Waits 1s
        'w]b░λs∫', // Types 'One'
        1, // Waits 1s
        'Webapps', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Mobile apps', // Types 'Three' without deleting 'Two',
       2000,
        () => {
        },
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' }}
    />
  );
};