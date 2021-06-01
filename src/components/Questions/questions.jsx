/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore } from '@material-ui/icons';
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
    width: '100%',
    paddingLeft: '30%',
    paddingRight: '30%',
    backgroundColor: '#f5f5f5',
    paddingBottom: '100px',
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  question: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#f5f5f5',
    '& > *': {
      margin: theme.spacing(4),
    },
  },
}));

export default function SimpleAccordion() {
  const [t] = useTranslation("global");
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDisplay = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={classes.button}>
        <Button variant="contained" onClick={handleDisplay}>
          {open ? t("Outils.compris") : t("Outils.aide")}
        </Button>
      </div>
      {open && (
        <div className={classes.question}>
          <img src="https://svgshare.com/i/WDb.svg" alt="quest" />
        </div>
      )}

      {open && (
        <div className={classes.root}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel1a-content" id="panel1a-header">
              <Typography className={classes.heading}>{t("Outils.entrer")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {t("Outils.entrerText")} <br></br> {t("Outils.entrerText2")}<br></br> {t("Outils.entrerText3")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={classes.heading}>{t("Outils.modifier")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {t("Outils.modifierText")}
              </Typography>
            </AccordionDetails>
          </Accordion>{' '}
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={classes.heading}>{t("Outils.ecouter")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {t("Outils.ecouterText")}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />} aria-controls="panel2a-content" id="panel2a-header">
              <Typography className={classes.heading}> {t("Outils.recuperer")}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              {t("Outils.recupererText")}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      )}
    </>
  );
}
