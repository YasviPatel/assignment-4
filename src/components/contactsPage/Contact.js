import classes from "./Contact.module.css";

const Contact = (props) => {
  console.log(props.contact.name.split(" "));
  const profileLettersSplit = props.contact.name.split(" ");
  console.log(profileLettersSplit);
  const firstLetter = profileLettersSplit[0].slice(0, 1).toUpperCase();
  let profileLetters = firstLetter;
  if (profileLettersSplit.length > 1) {
    const secondLetter = profileLettersSplit[1].slice(0, 1).toUpperCase();
    profileLetters = firstLetter.concat(secondLetter);
  }
  return (
    <>
      <div className={classes.main}>
        <div className={classes.circleDiv}>
          <p>
            <span className={classes.circleSpan}>
              <span>{profileLetters}</span>
            </span>
          </p>
        </div>
        <div className={classes.name}>
          <div className={classes.contactName}>{props.contact.name}</div>
          <div className={classes.email}>{props.contact.email}</div>
        </div>
        <span className={classes.company}>{props.contact.company}</span>
      </div>
    </>
  );
};

export default Contact;
