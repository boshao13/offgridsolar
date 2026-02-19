import React, { useState, memo } from 'react';
import styled, { keyframes, css, createGlobalStyle } from 'styled-components';

import eg4BatteryImg from './assets/eg4inverter.png';
import eg4280Img from './assets/eg4280.webp';
import eg4314Img from './assets/eg4314.webp';
import aptosImg from './assets/aptos550.webp';

const FontLoader = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500&display=swap');
`;

const fadeInUp = keyframes`from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}`;
const subtlePulse = keyframes`0%,100%{box-shadow:0 0 0 0 rgba(255,222,89,.3)}50%{box-shadow:0 0 0 8px rgba(255,222,89,0)}`;
const gradientShift = keyframes`0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}`;
const spin = keyframes`to{transform:rotate(360deg)}`;

const PageWrapper = styled.section`
  position:relative;min-height:100vh;width:100%;background:#080f07;
  overflow-x:hidden;font-family:'Plus Jakarta Sans',-apple-system,sans-serif;
  box-sizing:border-box;
  *,*::before,*::after{box-sizing:border-box}
`;
const TopGradient = styled.div`position:absolute;top:0;left:0;right:0;height:600px;background:radial-gradient(ellipse 70% 50% at 50% 0%,rgba(18,54,14,.6) 0%,transparent 100%);pointer-events:none;z-index:0;`;
const AccentOrb = styled.div`position:absolute;width:500px;height:500px;border-radius:50%;filter:blur(120px);opacity:.07;pointer-events:none;z-index:0;&.orb1{top:10%;left:-5%;background:#ffde59;}&.orb2{bottom:20%;right:-8%;background:#22c55e;}`;
const GridPattern = styled.div`position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 60% 50% at 50% 30%,black 0%,transparent 100%);pointer-events:none;z-index:0;`;

const Container = styled.div`
  position:relative;z-index:1;width:100%;max-width:1320px;margin:0 auto;padding:6rem 3rem 5rem;
  @media(max-width:1200px){padding:5rem 2.5rem 4rem;}
  @media(max-width:768px){padding:5rem 1.25rem 3rem;}
  @media(max-width:480px){padding:5rem 1rem 2.5rem;}
`;

const HeaderSection = styled.div`text-align:center;margin-bottom:4rem;@media(max-width:768px){margin-bottom:3rem;}`;

const Eyebrow = styled.div`
  display:inline-flex;align-items:center;gap:.6rem;padding:.5rem 1.25rem;
  background:rgba(255,222,89,.08);border:1px solid rgba(255,222,89,.15);border-radius:100px;
  font-size:.78rem;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#ffde59;
  margin-bottom:2rem;opacity:0;animation:${fadeInUp} .7s ease forwards .1s;
  svg{width:14px;height:14px}
  @media(max-width:480px){font-size:.65rem;padding:.4rem 1rem;letter-spacing:1px;}
`;

const PageTitle = styled.h1`
  font-size:clamp(2rem,5vw,4rem);font-weight:800;line-height:1.08;color:#fff;
  margin-bottom:1.5rem;opacity:0;animation:${fadeInUp} .7s ease forwards .25s;letter-spacing:-.02em;
  span{background:linear-gradient(135deg,#ffde59,#fbbf24,#f59e0b);background-size:200% 200%;
  animation:${gradientShift} 4s ease infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;}
  @media(max-width:768px){br{display:none;}}
`;

const PageSubtitle = styled.p`
  font-size:clamp(.95rem,1.8vw,1.2rem);font-weight:400;line-height:1.75;
  color:rgba(255,255,255,.65);max-width:640px;margin:0 auto 2.5rem;
  opacity:0;animation:${fadeInUp} .7s ease forwards .4s;
  strong{color:rgba(255,255,255,.9);font-weight:600;}
  @media(max-width:480px){margin-bottom:2rem;}
`;

const StatsRow = styled.div`
  display:flex;gap:2.5rem;justify-content:center;flex-wrap:wrap;
  opacity:0;animation:${fadeInUp} .7s ease forwards .55s;
  @media(max-width:600px){gap:1.25rem;display:grid;grid-template-columns:1fr 1fr;max-width:320px;margin:0 auto;}
`;

const StatItem = styled.div`
  text-align:center;
  .number{font-size:1.75rem;font-weight:800;color:#ffde59;line-height:1;margin-bottom:.25rem;
    @media(max-width:480px){font-size:1.5rem;}}
  .label{font-size:.78rem;font-weight:500;color:rgba(255,255,255,.4);text-transform:uppercase;letter-spacing:1px;
    @media(max-width:480px){font-size:.68rem;}}
`;

const PackagesGrid = styled.div`
  display:grid;grid-template-columns:repeat(3,1fr);gap:1.25rem;align-items:start;
  opacity:0;animation:${fadeInUp} .7s ease forwards .65s;
  @media(max-width:1024px){grid-template-columns:1fr;max-width:540px;margin:0 auto;gap:1.5rem;}
`;

const CardOuter = styled.div`position:relative;`;

const PopularTag = styled.div`
  position:absolute;top:-12px;left:50%;transform:translateX(-50%);padding:.35rem 1.25rem;
  background:linear-gradient(135deg,#ffde59,#f59e0b);color:#12360e;font-size:.7rem;font-weight:700;
  letter-spacing:1.5px;text-transform:uppercase;border-radius:100px;z-index:3;white-space:nowrap;
  box-shadow:0 4px 20px rgba(255,222,89,.25);
`;

const Card = styled.div`
  position:relative;overflow:hidden;border-radius:20px;cursor:pointer;
  transition:all .4s cubic-bezier(.4,0,.2,1);
  background:${({$featured})=>$featured?'linear-gradient(170deg,rgba(255,222,89,.06) 0%,rgba(255,255,255,.03) 40%,rgba(255,222,89,.04) 100%)':'rgba(255,255,255,.025)'};
  border:1px solid ${({$featured})=>$featured?'rgba(255,222,89,.2)':'rgba(255,255,255,.07)'};
  &:hover{border-color:${({$featured})=>$featured?'rgba(255,222,89,.35)':'rgba(255,222,89,.15)'};
  box-shadow:0 16px 50px rgba(0,0,0,.25);transform:translateY(-3px);}
`;

const CardHeader = styled.div`padding:2rem 1.75rem 0;@media(max-width:480px){padding:1.5rem 1.25rem 0;}`;
const TierLabel = styled.div`font-family:'JetBrains Mono',monospace;font-size:.72rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:${({$featured})=>$featured?'#ffde59':'rgba(255,255,255,.35)'};margin-bottom:.75rem;`;
const PackageName = styled.h2`font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:.35rem;letter-spacing:-.01em;`;
const SystemSize = styled.span`font-size:.85rem;font-weight:600;color:#ffde59;display:block;margin-bottom:.6rem;`;
const PackageDesc = styled.p`font-size:.88rem;line-height:1.6;color:rgba(255,255,255,.55);margin-bottom:1.25rem;`;

const PriceSection = styled.div`padding:0 1.75rem;margin-bottom:1.5rem;@media(max-width:480px){padding:0 1.25rem;}`;
const PriceRow = styled.div`display:flex;align-items:baseline;gap:.5rem;`;
const PriceAmount = styled.div`font-size:2.5rem;font-weight:800;color:#fff;line-height:1;letter-spacing:-.02em;.dollar{font-size:1.4rem;font-weight:700;vertical-align:top;position:relative;top:4px;margin-right:1px;}`;
const PriceSubtext = styled.span`font-size:.78rem;color:rgba(255,255,255,.35);font-weight:500;`;
const PriceNote = styled.div`font-size:.75rem;color:rgba(255,255,255,.4);margin-top:.4rem;`;

const EquipmentSummary = styled.div`padding:0 1.75rem 1.5rem;@media(max-width:480px){padding:0 1.25rem 1.25rem;}`;
const EquipDivider = styled.div`height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.07),transparent);margin-bottom:1.25rem;`;
const EquipGrid = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:.6rem;`;
const EquipItem = styled.div`
  display:flex;align-items:center;gap:.5rem;
  .icon{width:32px;height:32px;display:flex;align-items:center;justify-content:center;background:rgba(255,222,89,.06);border-radius:8px;flex-shrink:0;svg{width:16px;height:16px;color:#ffde59;}}
  .info .count{font-size:.85rem;font-weight:700;color:#fff;line-height:1.2;}
  .info .type{font-size:.7rem;color:rgba(255,255,255,.4);font-weight:500;}
`;

const ExpandToggle = styled.button`
  width:100%;padding:.85rem 1.75rem;display:flex;align-items:center;justify-content:center;gap:.5rem;
  background:rgba(255,255,255,.02);border:none;border-top:1px solid rgba(255,255,255,.05);
  color:rgba(255,255,255,.5);font-family:'Plus Jakarta Sans',sans-serif;font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;
  &:hover{color:#ffde59;background:rgba(255,222,89,.03);}
  svg{width:16px;height:16px;transition:transform .3s;transform:rotate(${({$expanded})=>$expanded?'180deg':'0deg'});}
`;

const ExpandedContent = styled.div`
  max-height:${({$expanded})=>$expanded?'800px':'0'};opacity:${({$expanded})=>$expanded?1:0};
  overflow:hidden;transition:max-height .5s cubic-bezier(.4,0,.2,1),opacity .3s ease ${({$expanded})=>$expanded?'.1s':'0s'};
`;
const ExpandedInner = styled.div`padding:0 1.75rem 1.5rem;@media(max-width:480px){padding:0 1.25rem 1.25rem;}`;
const SectionLabel = styled.div`font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:.75rem;margin-top:1.25rem;&:first-child{margin-top:0;}`;
const SpecList = styled.div`display:flex;flex-direction:column;gap:.4rem;`;
const SpecRow = styled.div`
  display:flex;align-items:center;gap:.6rem;padding:.45rem 0;font-size:.85rem;color:rgba(255,255,255,.75);line-height:1.3;
  svg{width:15px;height:15px;min-width:15px;color:#22c55e;}
  @media(max-width:480px){font-size:.8rem;}
`;

const EquipmentCard = styled.div`
  display:flex;align-items:center;gap:1rem;padding:.85rem;background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.05);border-radius:12px;margin-bottom:.5rem;
  .eq-icon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;background:rgba(255,222,89,.08);border-radius:10px;flex-shrink:0;svg{width:22px;height:22px;color:#ffde59;}}
  .eq-info{flex:1;min-width:0;.eq-name{font-size:.85rem;font-weight:600;color:#fff;line-height:1.3;}.eq-detail{font-size:.75rem;color:rgba(255,255,255,.4);line-height:1.4;}}
  .eq-warranty{font-family:'JetBrains Mono',monospace;font-size:.65rem;font-weight:500;color:#22c55e;background:rgba(34,197,94,.08);padding:.25rem .6rem;border-radius:6px;white-space:nowrap;flex-shrink:0;}
  @media(max-width:480px){gap:.75rem;padding:.7rem;.eq-icon{width:36px;height:36px;svg{width:18px;height:18px;}}.eq-info .eq-name{font-size:.78rem;}.eq-info .eq-detail{font-size:.7rem;}}
`;

const CTASection = styled.div`padding:0 1.75rem 1.75rem;@media(max-width:480px){padding:0 1.25rem 1.5rem;}`;

const BuyButton = styled.button`
  width:100%;padding:.95rem 2rem;font-family:'Plus Jakarta Sans',sans-serif;font-size:.95rem;font-weight:700;
  letter-spacing:.3px;border-radius:12px;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);border:none;position:relative;
  ${({$featured})=>$featured?css`
    color:#12360e;background:linear-gradient(135deg,#ffde59,#f5c842);box-shadow:0 4px 15px rgba(255,222,89,.2);
    animation:${subtlePulse} 3s ease-in-out infinite;
    &:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(255,222,89,.3);}
  `:css`
    color:#fff;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);
    &:hover{border-color:#ffde59;color:#ffde59;background:rgba(255,222,89,.06);}
  `}
  &:active{transform:translateY(0);}&:disabled{opacity:.5;cursor:wait;animation:none;}
`;
const ButtonSpinner = styled.span`display:inline-block;width:16px;height:16px;border:2px solid rgba(18,54,14,.3);border-top-color:#12360e;border-radius:50%;animation:${spin} .6s linear infinite;margin-right:.5rem;vertical-align:middle;`;

// ─── Product Showcase ──────────────────────────────────────
const ProductSection = styled.div`margin-top:6rem;@media(max-width:768px){margin-top:4rem;}`;

const ProductHeader = styled.div`
  text-align:center;margin-bottom:3rem;
  h3{font-size:clamp(1.4rem,3vw,2.25rem);font-weight:800;color:#fff;margin-bottom:.75rem;letter-spacing:-.01em;span{color:#ffde59;}}
  p{font-size:clamp(.88rem,1.5vw,1rem);color:rgba(255,255,255,.5);max-width:560px;margin:0 auto;line-height:1.65;}
`;

const ProductCard = styled.div`
  display:grid;grid-template-columns:1fr 1fr;gap:0;background:rgba(255,255,255,.02);
  border:1px solid rgba(255,255,255,.06);border-radius:24px;overflow:hidden;margin-bottom:1.5rem;
  transition:all .4s ease;
  &:hover{border-color:rgba(255,222,89,.12);box-shadow:0 12px 40px rgba(0,0,0,.2);}
  &:last-child{margin-bottom:0;}
  @media(max-width:768px){grid-template-columns:1fr;border-radius:20px;}
`;

const ProductImageWrap = styled.div`
  position:relative;display:flex;align-items:center;justify-content:center;padding:3rem;
  background:linear-gradient(${({$angle})=>$angle||'135deg'},rgba(255,222,89,.04) 0%,rgba(255,255,255,.015) 50%,rgba(18,54,14,.06) 100%);
  order:${({$reverse})=>$reverse?2:1};min-height:380px;overflow:hidden;
  &::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 50% 50%,rgba(255,222,89,.05) 0%,transparent 70%);pointer-events:none;}
  img{position:relative;max-width:92%;max-height:400px;width:auto;height:auto;object-fit:contain;
    filter:drop-shadow(0 12px 40px rgba(0,0,0,.5));transition:transform .5s cubic-bezier(.4,0,.2,1);}
  &:hover img{transform:scale(1.05);}
  @media(max-width:768px){order:1;min-height:280px;padding:2.5rem 2rem;img{max-height:300px;}}
  @media(max-width:480px){min-height:220px;padding:2rem 1.5rem;img{max-height:240px;}}
`;

const ProductInfo = styled.div`
  padding:2.5rem;display:flex;flex-direction:column;justify-content:center;
  order:${({$reverse})=>$reverse?1:2};
  @media(max-width:768px){order:2;padding:1.75rem 1.5rem 2rem;}
  @media(max-width:480px){padding:1.5rem 1.25rem 1.75rem;}
`;

const ProductTagRow = styled.div`display:flex;align-items:center;gap:.5rem;margin-bottom:.75rem;flex-wrap:wrap;`;
const ProductTag = styled.span`
  font-family:'JetBrains Mono',monospace;font-size:.62rem;font-weight:500;letter-spacing:1.5px;
  text-transform:uppercase;padding:.3rem .7rem;border-radius:6px;
  background:${({$variant})=>$variant==='warranty'?'rgba(34,197,94,.1)':$variant==='cert'?'rgba(59,130,246,.1)':'rgba(255,222,89,.08)'};
  color:${({$variant})=>$variant==='warranty'?'#22c55e':$variant==='cert'?'#60a5fa':'#ffde59'};
  @media(max-width:480px){font-size:.58rem;padding:.25rem .6rem;}
`;
const ProductName = styled.h4`font-size:clamp(1.1rem,2vw,1.35rem);font-weight:800;color:#fff;margin-bottom:.75rem;letter-spacing:-.01em;line-height:1.2;`;
const ProductDesc = styled.p`font-size:clamp(.82rem,1.2vw,.9rem);line-height:1.7;color:rgba(255,255,255,.55);margin-bottom:1.5rem;@media(max-width:480px){margin-bottom:1.25rem;}`;

const FeatureGrid = styled.div`display:grid;grid-template-columns:1fr 1fr;gap:.6rem;@media(max-width:480px){grid-template-columns:1fr;gap:.5rem;}`;
const FeatureChip = styled.div`
  display:flex;align-items:flex-start;gap:.6rem;padding:.65rem .75rem;
  background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.04);border-radius:10px;transition:border-color .2s;
  &:hover{border-color:rgba(255,222,89,.1);}
  .chip-icon{width:28px;height:28px;min-width:28px;display:flex;align-items:center;justify-content:center;background:rgba(255,222,89,.06);border-radius:7px;margin-top:1px;svg{width:14px;height:14px;color:#ffde59;}}
  .chip-text{font-size:.78rem;color:rgba(255,255,255,.65);line-height:1.45;strong{display:block;color:rgba(255,255,255,.9);font-weight:600;font-size:.8rem;margin-bottom:1px;}}
`;
const ProductDivider = styled.div`
  display:flex;align-items:center;gap:1rem;margin:2.5rem 0;
  &::before,&::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(255,255,255,.06),transparent);}
  span{font-family:'JetBrains Mono',monospace;font-size:.6rem;font-weight:500;letter-spacing:2px;text-transform:uppercase;color:rgba(255,255,255,.2);}
  @media(max-width:768px){margin:2rem 0;}
`;

// ─── What's Included ───────────────────────────────────────
const IncludedSection = styled.div`margin-top:6rem;@media(max-width:768px){margin-top:4rem;}`;
const IncludedHeader = styled.div`
  text-align:center;margin-bottom:2.5rem;
  h3{font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:#fff;margin-bottom:.5rem;letter-spacing:-.01em;}
  p{font-size:clamp(.88rem,1.5vw,.95rem);color:rgba(255,255,255,.5);max-width:500px;margin:0 auto;line-height:1.6;}
`;
const IncludedGrid = styled.div`
  display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;
  @media(max-width:900px){grid-template-columns:repeat(2,1fr);}
  @media(max-width:480px){grid-template-columns:1fr;gap:.75rem;}
`;
const IncludedCard = styled.div`
  padding:1.5rem 1.25rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);
  border-radius:16px;transition:all .3s ease;
  &:hover{border-color:rgba(255,222,89,.15);background:rgba(255,255,255,.035);}
  .inc-icon{width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:rgba(255,222,89,.06);border-radius:10px;margin-bottom:1rem;svg{width:20px;height:20px;color:#ffde59;}}
  h4{font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.3rem;}
  p{font-size:.78rem;color:rgba(255,255,255,.45);line-height:1.5;}
`;

// ─── FAQ ───────────────────────────────────────────────────
const FAQSection = styled.div`margin-top:6rem;max-width:680px;margin-left:auto;margin-right:auto;@media(max-width:768px){margin-top:4rem;}`;
const FAQTitle = styled.h3`font-size:clamp(1.4rem,3vw,2rem);font-weight:800;color:#fff;text-align:center;margin-bottom:2rem;letter-spacing:-.01em;`;
const FAQItem = styled.div`border-bottom:1px solid rgba(255,255,255,.06);&:first-child{border-top:1px solid rgba(255,255,255,.06);}`;
const FAQQuestion = styled.button`
  width:100%;display:flex;align-items:center;justify-content:space-between;padding:1.15rem 0;
  background:none;border:none;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;
  font-size:clamp(.88rem,1.5vw,.95rem);font-weight:600;text-align:left;cursor:pointer;transition:color .2s;
  &:hover{color:#ffde59;}
  svg{width:18px;height:18px;color:#ffde59;transition:transform .3s;transform:rotate(${({$open})=>$open?'45deg':'0deg'});flex-shrink:0;margin-left:1rem;}
`;
const FAQAnswer = styled.div`
  max-height:${({$open})=>$open?'300px':'0'};overflow:hidden;transition:max-height .4s cubic-bezier(.4,0,.2,1);
  p{padding-bottom:1.15rem;font-size:.88rem;line-height:1.7;color:rgba(255,255,255,.55);}
`;

const BottomCTA = styled.div`
  margin-top:6rem;text-align:center;padding:3rem 2rem;background:rgba(255,222,89,.03);
  border:1px solid rgba(255,222,89,.08);border-radius:24px;
  @media(max-width:768px){margin-top:4rem;padding:2.5rem 1.5rem;border-radius:20px;}
  h3{font-size:clamp(1.25rem,2.5vw,1.5rem);font-weight:800;color:#fff;margin-bottom:.75rem;}
  p{font-size:clamp(.88rem,1.5vw,.95rem);color:rgba(255,255,255,.55);max-width:480px;margin:0 auto 1.5rem;line-height:1.6;}
  a{display:inline-block;padding:.85rem 2rem;font-size:.9rem;font-weight:700;color:#12360e;
    background:linear-gradient(135deg,#ffde59,#f5c842);border-radius:12px;text-decoration:none;
    transition:all .3s;box-shadow:0 4px 15px rgba(255,222,89,.2);
    &:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(255,222,89,.3);}}
`;

// ─── SVG Icons ─────────────────────────────────────────────
const I = (d, props = {}) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.sw || "2"} strokeLinecap="round" strokeLinejoin="round" {...props}>{d}</svg>;
const CheckIcon = () => I(<polyline points="20 6 9 17 4 12"/>, { sw: "2.5" });
const PanelIcon = () => I(<><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="12" y1="2" x2="12" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="22" y2="7"/><line x1="2" y1="17" x2="22" y2="17"/></>);
const BatteryIcon = () => I(<><rect x="1" y="6" width="18" height="12" rx="2"/><line x1="23" y1="13" x2="23" y2="11"/><line x1="6" y1="10" x2="6" y2="14"/><line x1="10" y1="10" x2="10" y2="14"/><line x1="14" y1="10" x2="14" y2="14"/></>);
const InverterIcon = () => I(<><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h2l1-3 2 6 1-3h2"/></>);
const WireIcon = () => I(<><path d="M4 12c0-3.87 3.13-7 7-7h2c3.87 0 7 3.13 7 7s-3.13 7-7 7h-2c-3.87 0-7-3.13-7-7z"/><circle cx="9" cy="12" r="1" fill="currentColor"/><circle cx="15" cy="12" r="1" fill="currentColor"/></>);
const ShieldIcon = () => I(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></>);
const TruckIcon = () => I(<><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>);
const PhoneIcon = () => I(<path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>);
const BlueprintIcon = () => I(<><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>);
const PlusIcon = () => I(<><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>);
const ChevronDown = () => I(<polyline points="6 9 12 15 18 9"/>);
const SunSmall = () => I(<><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2"/></>);
const WeatherIcon = () => I(<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z"/>);
const ZapIcon = () => I(<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>);
const WifiIcon = () => I(<><path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></>);
const CertIcon = () => I(<><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>);
const ThermIcon = () => I(<path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/>);
const SettingsIcon = () => I(<><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></>);
const LockIcon = () => I(<><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></>);
const BluetoothIcon = () => I(<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>);

// ─── Data ──────────────────────────────────────────────────
const PRODUCTS = [
  { id:'panel', name:'Aptos 550W Bifacial Solar Panel', image:aptosImg, angle:'145deg',
    tags:[{label:'550W Bifacial',variant:'default'},{label:'25-Year Warranty',variant:'warranty'},{label:'Tier-1 Manufacturer',variant:'cert'}],
    description:'The Aptos 550W bifacial module captures sunlight from both sides, boosting energy production up to 30% over traditional panels. Built with premium N-type cells and a reinforced frame, these panels are engineered for decades of reliable performance in the harshest off-grid environments.',
    features:[{icon:<ZapIcon/>,title:'550W Output',text:'High-wattage N-type bifacial cells'},{icon:<ShieldIcon/>,title:'25-Year Warranty',text:'Full manufacturer power & product warranty'},{icon:<WeatherIcon/>,title:'All-Weather Built',text:'Heavy snow, wind & hail rated frame'},{icon:<CertIcon/>,title:'Tier-1 Certified',text:'UL listed, IEC & MCS certified'}]},
  { id:'inverter', name:'EG4 18kPV Hybrid Inverter', image:eg4BatteryImg, angle:'135deg',
    tags:[{label:'Hybrid Inverter',variant:'default'},{label:'10-Year Warranty',variant:'warranty'},{label:'ETL / cETL Certified',variant:'cert'}],
    description:'The EG4 18kPV merges grid-tied and off-grid functions into one powerhouse hybrid inverter, eliminating the need for separate charge controllers or transformers. It delivers up to 12kW of continuous output while seamlessly integrating solar, battery storage, and grid power.',
    features:[{icon:<WeatherIcon/>,title:'All-Weather Rated',text:'NEMA 4X / IP65 outdoor enclosure'},{icon:<SettingsIcon/>,title:'Plug & Play',text:'Inverter, MPPT & power management built-in'},{icon:<CertIcon/>,title:'Fully Certified',text:'UL, CSA, IEEE, NEC compliant'},{icon:<WifiIcon/>,title:'Remote Monitoring',text:'Live data, history & firmware updates'}]},
  { id:'battery280', name:'EG4 280Ah All-Weather WallMount Battery', image:eg4280Img, angle:'225deg',
    tags:[{label:'14.3 kWh \u00b7 LiFePO\u2084',variant:'default'},{label:'10-Year Warranty',variant:'warranty'},{label:'UL9540 Listed',variant:'cert'}],
    description:"The EG4 14.3kWh All-Weather WallMount Battery is a high-capacity energy storage solution designed for outdoor reliability and seamless system integration. Built with an IP65-rated enclosure and quick-connect cables, it's ideal for residential or commercial installations in any climate.",
    features:[{icon:<WeatherIcon/>,title:'IP65 All-Weather',text:'Weather-rated enclosure & quick connectors'},{icon:<LockIcon/>,title:'Rapid Shutdown',text:'RSD, ESS disconnect & inverter RSD support'},{icon:<CertIcon/>,title:'UL Certified',text:'UL9540A tested, UL1973, UL9540 listed'},{icon:<ThermIcon/>,title:'Self-Heating',text:'Auto-warms in cold temps for peak performance'}]},
  { id:'battery314', name:'EG4 314Ah All-Weather WallMount Battery', image:eg4314Img, angle:'160deg',
    tags:[{label:'16 kWh \u00b7 LiFePO\u2084',variant:'default'},{label:'10-Year Warranty',variant:'warranty'},{label:'IP67 Rated',variant:'cert'}],
    description:'The EG4 WallMount 314Ah delivers powerful, dependable energy storage designed for demanding environments. With 16kWh of usable capacity and a durable IP67 enclosure, this battery is built for outdoor installations, system expansions, and year-round reliability.',
    features:[{icon:<ZapIcon/>,title:'16 kWh Usable',text:'314Ah for extended runtime & backup'},{icon:<WeatherIcon/>,title:'IP67 Enclosure',text:'Dust-proof & water submersion rated'},{icon:<BluetoothIcon/>,title:'BT + Wi-Fi',text:'Real-time monitoring & OTA firmware updates'},{icon:<SettingsIcon/>,title:'Auto-Addressing',text:'Plug-and-play with EG4 closed-loop comms'}]},
];

const PACKAGES = [
  { id:'starter',tier:'Essential',name:'Cabin Ready',size:'5.5 kW \u00b7 16 kWh Storage',description:'Everything to power a cabin or small home \u2014 lights, fridge, charging, and essential appliances.',price:10000,featured:false,
    equipment:{panels:{count:10,label:'550W Panels'},batteries:{count:1,label:'16 kWh Battery'},inverters:{count:1,label:'18KPV Inverter'}},
    specs:[{name:'10\u00d7 Aptos 550W Bifacial Solar Panels',detail:'N-type bifacial \u00b7 25-year warranty',warranty:'25 yr'},{name:'1\u00d7 EG4 LL-S 16kWh LiFePO\u2084 Battery',detail:'All-weather rated \u00b7 6,000+ cycles',warranty:'10 yr'},{name:'1\u00d7 EG4 18KPV Off-Grid Inverter',detail:'18kW rated \u00b7 split-phase 120/240V',warranty:'10 yr'}],
    includes:['Complete wiring kit \u2014 MC4 connectors, PV wire, battery cables','Breaker panel, disconnects & overcurrent protection','Aluminum ground mount or roof mount rails','NM-stamped engineering plans','Dedicated video call build support','System monitoring setup']},
  { id:'homestead',tier:'Most Popular',name:'Homestead',size:'11 kW \u00b7 32 kWh Storage',description:'Full-home power for families going off-grid. Run your kitchen, laundry, workshop, and well pump without compromise.',price:17000,featured:true,
    equipment:{panels:{count:20,label:'550W Panels'},batteries:{count:2,label:'16 kWh Batteries'},inverters:{count:1,label:'18KPV Inverter'}},
    specs:[{name:'20\u00d7 Aptos 550W Bifacial Solar Panels',detail:'N-type bifacial \u00b7 25-year warranty',warranty:'25 yr'},{name:'2\u00d7 EG4 LL-S 16kWh LiFePO\u2084 Batteries',detail:'All-weather rated \u00b7 parallel config \u00b7 32 kWh total',warranty:'10 yr'},{name:'1\u00d7 EG4 18KPV Off-Grid Inverter',detail:'18kW rated \u00b7 split-phase 120/240V',warranty:'10 yr'}],
    includes:['Complete wiring kit \u2014 MC4 connectors, PV wire, battery cables','Battery paralleling cables & bus bars','Breaker panel, disconnects & overcurrent protection','Aluminum ground mount or roof mount system','NM-stamped engineering plans','Priority video call build support + site review','System monitoring setup']},
  { id:'ranch',tier:'Maximum Power',name:'Ranch',size:'16.5 kW \u00b7 48 kWh Storage',description:'Total energy independence \u2014 power a large home, shop, well pump, and HVAC. Built for properties that need serious capacity.',price:25000,featured:false,
    equipment:{panels:{count:30,label:'550W Panels'},batteries:{count:3,label:'16 kWh Batteries'},inverters:{count:1,label:'18KPV Inverter'}},
    specs:[{name:'30\u00d7 Aptos 550W Bifacial Solar Panels',detail:'N-type bifacial \u00b7 25-year warranty',warranty:'25 yr'},{name:'3\u00d7 EG4 LL-S 16kWh LiFePO\u2084 Batteries',detail:'All-weather rated \u00b7 parallel config \u00b7 48 kWh total',warranty:'10 yr'},{name:'1\u00d7 EG4 18KPV Off-Grid Inverter',detail:'18kW rated \u00b7 split-phase 120/240V',warranty:'10 yr'},{name:'Paralleling kit + combiner boxes + conduit',detail:'All distribution hardware included',warranty:''}],
    includes:['Complete wiring kit \u2014 MC4 connectors, PV wire, battery cables','Battery paralleling kit, bus bars & combiner boxes','Conduit, junction boxes & wire management','Main breaker panel, disconnects & overcurrent protection','Heavy-duty aluminum ground mount system','NM-stamped engineering plans','Priority support + optional on-site consultation','System monitoring + generator integration ready']},
];

const FAQ_DATA = [
  {q:'What exactly do I receive?',a:'Every component ships directly to your property \u2014 panels, batteries, inverter, charge controller, mounting hardware, wiring, breakers, and all connectors. Plus NM-stamped engineering plans and dedicated support to walk you through the build.'},
  {q:'Why is this cheaper than hiring an installer?',a:'Solar installation companies typically charge $15,000\u2013$40,000+ for labor alone. Our packages give you commercial-grade equipment at wholesale pricing, and our engineering plans + build support replace the need for a contractor. Most owner-builders save 40\u201360% compared to a turnkey install.'},
  {q:'Do I need electrical experience?',a:'Basic comfort with tools helps, but our engineering plans are step-by-step with wiring diagrams, and our support team walks you through everything via video call. Many of our customers have zero solar experience. If you can follow plans and use a drill, you can build this.'},
  {q:'What about the EG4 equipment specifically?',a:'EG4 is one of the fastest-growing off-grid brands in the US. The LL-S 16kWh battery is all-weather rated (no climate control needed), uses LiFePO\u2084 chemistry for 6,000+ cycle life, and the 18KPV inverter handles 18kW with split-phase 120/240V output. Both carry 10-year manufacturer warranties.'},
  {q:'Can I expand my system later?',a:'Absolutely. The EG4 18KPV supports up to 6 batteries in parallel, and you can add panels as needed. All our systems are designed to grow with you.'},
  {q:'How long does shipping take?',a:'Most packages ship within 5\u20137 business days via freight. We coordinate all deliveries and provide tracking. Panels ship palletized to protect them in transit.'},
];

// ─── Component ─────────────────────────────────────────────
const SolarPackages = () => {
  const [loadingId, setLoadingId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleCheckout = async (pkg) => {
    setLoadingId(pkg.id);
    try {
      const res = await fetch('/api/create-checkout-session', { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({packageId:pkg.id}) });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else alert(data.error || 'Something went wrong. Please try again or call us.');
    } catch (err) { console.error('Checkout error:', err); alert('Unable to connect to payment server. Please try again.'); }
    finally { setLoadingId(null); }
  };

  const toggleExpand = (id) => setExpandedId(expandedId === id ? null : id);

  return (
    <PageWrapper>
      <FontLoader /><TopGradient /><AccentOrb className="orb1" /><AccentOrb className="orb2" /><GridPattern />
      <Container>
        <HeaderSection>
          <Eyebrow><SunSmall />Ship to Your Land &middot; Build at Your Pace</Eyebrow>
          <PageTitle>DIY Solar Packages with<br /><span>Professional-Grade Equipment</span></PageTitle>
          <PageSubtitle><strong>Save thousands by building it yourself</strong> — without guessing what to buy or how to wire it. Every package includes proven, warranty-backed equipment, stamped engineering plans, and a support team that walks you through the entire build.</PageSubtitle>
          <StatsRow>
            <StatItem><div className="number">40–60%</div><div className="label">Savings vs. Installer</div></StatItem>
            <StatItem><div className="number">25 yr</div><div className="label">Panel Warranty</div></StatItem>
            <StatItem><div className="number">10 yr</div><div className="label">Battery & Inverter</div></StatItem>
            <StatItem><div className="number">6,000+</div><div className="label">Battery Cycles</div></StatItem>
          </StatsRow>
        </HeaderSection>

        <PackagesGrid>
          {PACKAGES.map((pkg) => {
            const isExpanded = expandedId === pkg.id;
            return (
              <CardOuter key={pkg.id}>
                {pkg.featured && <PopularTag>Most Popular</PopularTag>}
                <Card $featured={pkg.featured} onClick={() => toggleExpand(pkg.id)}>
                  <CardHeader><TierLabel $featured={pkg.featured}>{pkg.tier}</TierLabel><PackageName>{pkg.name}</PackageName><SystemSize>{pkg.size}</SystemSize><PackageDesc>{pkg.description}</PackageDesc></CardHeader>
                  <PriceSection><PriceRow><PriceAmount><span className="dollar">$</span>{pkg.price.toLocaleString()}</PriceAmount><PriceSubtext>one-time</PriceSubtext></PriceRow><PriceNote>Free freight shipping · All hardware included</PriceNote></PriceSection>
                  <EquipmentSummary><EquipDivider /><EquipGrid>
                    <EquipItem><div className="icon"><PanelIcon /></div><div className="info"><div className="count">{pkg.equipment.panels.count}×</div><div className="type">{pkg.equipment.panels.label}</div></div></EquipItem>
                    <EquipItem><div className="icon"><BatteryIcon /></div><div className="info"><div className="count">{pkg.equipment.batteries.count}×</div><div className="type">{pkg.equipment.batteries.label}</div></div></EquipItem>
                    <EquipItem><div className="icon"><InverterIcon /></div><div className="info"><div className="count">{pkg.equipment.inverters.count}×</div><div className="type">{pkg.equipment.inverters.label}</div></div></EquipItem>
                    <EquipItem><div className="icon"><WireIcon /></div><div className="info"><div className="count">Full</div><div className="type">Wire & Misc Kit</div></div></EquipItem>
                  </EquipGrid></EquipmentSummary>
                  <ExpandToggle $expanded={isExpanded} onClick={(e)=>{e.stopPropagation();toggleExpand(pkg.id);}}>{isExpanded ? 'Show less' : 'View full specs'}<ChevronDown /></ExpandToggle>
                  <ExpandedContent $expanded={isExpanded}><ExpandedInner>
                    <SectionLabel>Equipment Details</SectionLabel>
                    {pkg.specs.map((spec,i) => (<EquipmentCard key={i}><div className="eq-icon">{i===0?<PanelIcon/>:i===1?<BatteryIcon/>:<InverterIcon/>}</div><div className="eq-info"><div className="eq-name">{spec.name}</div><div className="eq-detail">{spec.detail}</div></div>{spec.warranty&&<div className="eq-warranty">{spec.warranty}</div>}</EquipmentCard>))}
                    <SectionLabel>Everything Included</SectionLabel>
                    <SpecList>{pkg.includes.map((item,i) => (<SpecRow key={i}><CheckIcon />{item}</SpecRow>))}</SpecList>
                  </ExpandedInner></ExpandedContent>
                  <CTASection><BuyButton $featured={pkg.featured} onClick={(e)=>{e.stopPropagation();handleCheckout(pkg);}} disabled={loadingId===pkg.id}>{loadingId===pkg.id?<><ButtonSpinner />Processing...</>:`Order ${pkg.name} Package`}</BuyButton></CTASection>
                </Card>
              </CardOuter>
            );
          })}
        </PackagesGrid>

        {/* Product Showcase - above "More Than Just Hardware" */}
        <ProductSection>
          <ProductHeader><h3>The Equipment Inside <span>Every Package</span></h3><p>We only sell what we trust. Every component is warranty-backed, certified, and proven in real off-grid installations across New Mexico.</p></ProductHeader>
          {PRODUCTS.map((product, index) => {
            const isReverse = index % 2 === 1;
            return (<div key={product.id}>
              {index > 0 && <ProductDivider><span>Also Included</span></ProductDivider>}
              <ProductCard $reverse={isReverse}>
                <ProductImageWrap $reverse={isReverse} $angle={product.angle}><img src={product.image} alt={product.name} loading="lazy" /></ProductImageWrap>
                <ProductInfo $reverse={isReverse}>
                  <ProductTagRow>{product.tags.map((tag,i) => <ProductTag key={i} $variant={tag.variant}>{tag.label}</ProductTag>)}</ProductTagRow>
                  <ProductName>{product.name}</ProductName>
                  <ProductDesc>{product.description}</ProductDesc>
                  <FeatureGrid>{product.features.map((feat,i) => (<FeatureChip key={i}><div className="chip-icon">{feat.icon}</div><div className="chip-text"><strong>{feat.title}</strong>{feat.text}</div></FeatureChip>))}</FeatureGrid>
                </ProductInfo>
              </ProductCard>
            </div>);
          })}
        </ProductSection>

        {/* What's Included */}
        <IncludedSection>
          <IncludedHeader><h3>More Than Just Hardware</h3><p>Every package includes the support system you need to build with confidence.</p></IncludedHeader>
          <IncludedGrid>
            <IncludedCard><div className="inc-icon"><BlueprintIcon /></div><h4>Engineering Plans</h4><p>NM-stamped plans for permitting, inspections, and step-by-step build guidance</p></IncludedCard>
            <IncludedCard><div className="inc-icon"><TruckIcon /></div><h4>Free Freight Shipping</h4><p>Palletized delivery direct to your property or nearest freight terminal</p></IncludedCard>
            <IncludedCard><div className="inc-icon"><PhoneIcon /></div><h4>Build Support</h4><p>Live video calls with our team to guide you through every step of installation</p></IncludedCard>
            <IncludedCard><div className="inc-icon"><ShieldIcon /></div><h4>Real Warranties</h4><p>25-year panel warranty, 10-year battery & inverter — direct from manufacturers</p></IncludedCard>
          </IncludedGrid>
        </IncludedSection>

        <FAQSection>
          <FAQTitle>Common Questions</FAQTitle>
          {FAQ_DATA.map((faq,i) => (<FAQItem key={i}><FAQQuestion $open={openFAQ===i} onClick={()=>setOpenFAQ(openFAQ===i?null:i)}>{faq.q}<PlusIcon /></FAQQuestion><FAQAnswer $open={openFAQ===i}><p>{faq.a}</p></FAQAnswer></FAQItem>))}
        </FAQSection>

        <BottomCTA><h3>Not sure which package fits?</h3><p>Tell us about your property and power needs — we'll recommend the right system and answer any questions.</p><a href="/">Get a Free Consultation</a></BottomCTA>
      </Container>
    </PageWrapper>
  );
};

export default memo(SolarPackages);