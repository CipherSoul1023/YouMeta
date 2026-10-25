import { useState } from "react";
import { CallToAction } from "../components/landing/CallToAction";
import { Footer } from "../components/landing/Footer";
import { Hero } from "../components/landing/Hero";
import { HowItWorks } from "../components/landing/HowItWorks";
import { InteractivePreview } from "../components/landing/InteractivePreview";
import { Navbar } from "../components/landing/Navbar";
import { StartModal } from "../components/landing/StartModal";
export function LandingPage() { const [modalOpen, setModalOpen] = useState(false); const open = () => setModalOpen(true); return <><Navbar onStart={open}/><main><Hero onStart={open}/><div className="strip" aria-label="YouMeta message"><div className="container strip-inner"><span className="strip-label">A reminder</span><div className="strip-quote">“I don&apos;t know yet” is a <em>perfectly good place to begin.</em></div><div className="strip-asterisk" aria-hidden="true">✳</div></div></div><HowItWorks/><InteractivePreview/><CallToAction onStart={open}/></main><Footer/><StartModal open={modalOpen} onClose={() => setModalOpen(false)}/></>; }
