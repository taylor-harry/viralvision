import React from "react";
import styled from "styled-components";

const Aboutstyle = styled.div`
  background-color: rgba(255, 255, 255, 0.2);
  color: black;
  padding: 20px;
  text-align: left;
  border-radius: 20px;
  border-width: 1px;
  height: 100%
  width: 100%;
`;

export default function About() {
  return <Aboutstyle>

  <h1>Covid-19</h1>
  <h3>What is COVID-19? </h3>
  <p>COVID-19 is a disease caused by a new strain of coronavirus. ‘CO’ stands for corona, ‘VI’ for virus, and</p>
  <p>‘D’ for disease. Formerly, this disease was referred to as ‘2019 novel coronavirus’ or ‘2019-nCoV.’</p>
  <p>The COVID-19 virus is a new virus linked to the same family of viruses as Severe Acute Respiratory</p>
  <p>Syndrome (SARS) and some types of common cold.</p>
  <h3>What are the symptoms of COVID-19? </h3>
  <p>Symptoms can include fever, cough and shortness of breath. In more severe cases, infection can cause</p>
  <p>pneumonia or breathing difficulties. More rarely, the disease can be fatal. These symptoms are similar to</p>
  <p>the flu (influenza) or the common cold, which are a lot more common than COVID-19. This is why testing</p>
  <p>is required to confirm if someone has COVID-19.</p>
  <h3>How does COVID-19 spread? </h3>
  <p>The virus is transmitted through direct contact with respiratory droplets of an infected person (generated</p>
  <p>through coughing and sneezing). Individuals can also be infected from and touching surfaces</p>
  <p>contaminated with the virus and touching their face (e.g., eyes, nose, mouth). The COVID-19 virus may</p>
  <p>survive on surfaces for several hours, but simple disinfectants can kill it.</p>


  </Aboutstyle>;
}
