import { Heart, Users, GraduationCap, ArrowRight, CheckCircle2, Quote, Mail, MapPin, Phone, Facebook, Twitter, Instagram, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// --- Components ---

const Header = ({ onDonateClick }: { onDonateClick: () => void }) => (
  <header className="sticky top-0 z-50 w-full glass-card border-b border-slate-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Heart className="text-white w-6 h-6" />
          </div>
          <span className="font-serif text-xl font-bold text-primary leading-tight hidden sm:block">
            Hopeemayian
          </span>
        </div>
        
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#programs" className="hover:text-primary transition-colors">Programs</a>
          <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
          <a href="#involved" className="hover:text-primary transition-colors">Get Involved</a>
        </nav>

        <button 
          onClick={onDonateClick}
          className="btn-secondary text-sm px-5 py-2.5 shadow-md"
        >
          Donate Now
        </button>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <Heart className="text-secondary w-6 h-6" />
            <span className="font-serif text-xl font-bold text-white">Hopeemayian</span>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Empowering widows to reclaim their dignity and build a sustainable future through community, education, and support.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-secondary cursor-pointer" />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white">Our Programs</a></li>
            <li><a href="#" className="hover:text-white">Success Stories</a></li>
            <li><a href="#" className="hover:text-white">Volunteer</a></li>
            <li><a href="#" className="hover:text-white">Financial Transparency</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0" />
              <span>123 Hope Lane, Nairobi, Kenya</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <span>+254 700 000 000</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <span>info@hopeemayian.org</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Newsletter</h4>
          <p className="text-sm mb-4">Stay updated on our impact and how you can help.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-800 border-none rounded-lg px-4 py-2 text-sm w-full focus:ring-2 focus:ring-secondary"
            />
            <button className="bg-secondary p-2 rounded-lg hover:bg-secondary/90">
              <ArrowRight className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 Hopeemayian Organisation for Widows. Registered NGO #123456.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

const DonationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState('50');
  const [frequency, setFrequency] = useState('monthly');

  if (!isOpen) return null;

  const tiers = [
    { value: '25', label: '$25', desc: 'Provides essential hygiene kits' },
    { value: '50', label: '$50', desc: 'Provides a week of groceries' },
    { value: '100', label: '$100', desc: 'Funds a counseling session' },
    { value: '250', label: '$250', desc: 'Funds a skill-training workshop' },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden"
      >
        <div className="p-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-serif font-bold text-primary">Make a Difference</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
              <ArrowRight className="rotate-180 w-6 h-6" />
            </button>
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <div className="flex p-1 bg-slate-100 rounded-xl">
                <button 
                  onClick={() => setFrequency('once')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${frequency === 'once' ? 'bg-white shadow-sm text-primary' : 'text-slate-500'}`}
                >
                  One-time
                </button>
                <button 
                  onClick={() => setFrequency('monthly')}
                  className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${frequency === 'monthly' ? 'bg-white shadow-sm text-primary' : 'text-slate-500'}`}
                >
                  Monthly
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {tiers.map((tier) => (
                  <button
                    key={tier.value}
                    onClick={() => setAmount(tier.value)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${amount === tier.value ? 'border-secondary bg-secondary/5' : 'border-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="font-bold text-lg mb-1">{tier.label}</div>
                    <div className="text-xs text-slate-500 leading-tight">{tier.desc}</div>
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold">$</span>
                <input 
                  type="number" 
                  placeholder="Other amount" 
                  className="w-full pl-8 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-secondary font-bold"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>

              <button 
                onClick={() => setStep(2)}
                className="w-full btn-secondary py-4 text-lg"
              >
                Continue to Payment
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                Secure, encrypted transaction
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="text-green-600 w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold">Ready to process?</h4>
              <p className="text-slate-600">You are donating <span className="font-bold text-primary">${amount}</span> {frequency === 'monthly' ? 'every month' : 'once'}.</p>
              <div className="bg-slate-50 p-6 rounded-2xl text-left space-y-4">
                <input type="text" placeholder="Full Name" className="w-full bg-white border-none rounded-lg p-3 text-sm" />
                <input type="email" placeholder="Email Address" className="w-full bg-white border-none rounded-lg p-3 text-sm" />
                <div className="grid grid-cols-2 gap-3">
                  <input type="text" placeholder="MM/YY" className="bg-white border-none rounded-lg p-3 text-sm" />
                  <input type="text" placeholder="CVC" className="bg-white border-none rounded-lg p-3 text-sm" />
                </div>
              </div>
              <button 
                onClick={() => { alert('Thank you for your generosity!'); onClose(); setStep(1); }}
                className="w-full btn-primary py-4 text-lg"
              >
                Complete Donation
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onDonateClick={() => setIsModalOpen(true)} />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 rounded-bl-[200px]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-primary rounded-full text-sm font-bold mb-6">
                  <Heart className="w-4 h-4" />
                  <span>Empowering Widows Since 2015</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 leading-[1.1] mb-6">
                  Restoring Hope, <br />
                  <span className="text-primary italic">Rebuilding Lives.</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed">
                  We provide the emotional, financial, and educational support widows need to transition from grief to growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => setIsModalOpen(true)} className="btn-secondary text-lg px-8">
                    Donate Now
                  </button>
                  <button className="btn-outline text-lg px-8">
                    Get Assistance
                  </button>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative"
              >
                <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000" 
                    alt="Empowered Woman" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-3xl shadow-xl z-20 max-w-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <Users className="text-secondary w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">500+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Widows Supported</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 italic">
                    "Hopeemayian gave me the tools to start my own business and support my children."
                  </p>
                </div>
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-24 bg-white" id="about">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">The Hidden Struggle of Widowhood</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              In many communities, widows face not only the devastating loss of a partner but also social isolation, financial instability, and the loss of basic rights. We believe that no woman should have to navigate this journey alone.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="text-primary font-serif text-4xl font-bold mb-2">70%</div>
                <p className="text-sm text-slate-500">Face immediate financial crisis after loss</p>
              </div>
              <div className="p-6">
                <div className="text-primary font-serif text-4xl font-bold mb-2">1 in 3</div>
                <p className="text-sm text-slate-500">Report severe social isolation</p>
              </div>
              <div className="p-6">
                <div className="text-primary font-serif text-4xl font-bold mb-2">45%</div>
                <p className="text-sm text-slate-500">Lack access to vocational training</p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet the Hearts Behind Hopeemayian</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Our dedicated team of professionals and volunteers work tirelessly to ensure every widow feels seen, heard, and supported.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Dr. Sarah Hope",
                  role: "Founder & Executive Director",
                  bio: "A visionary leader dedicated to widow empowerment for over 15 years.",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                },
                {
                  name: "Grace Achieng",
                  role: "Lead Counselor",
                  bio: "Specialized in grief therapy and trauma recovery with a heart for community healing.",
                  image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=400"
                },
                {
                  name: "Samuel Mwangi",
                  role: "Program Director",
                  bio: "Oversees financial aid and skill-building initiatives to ensure maximum impact.",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                },
                {
                  name: "Faith Mutua",
                  role: "Volunteer Coordinator",
                  bio: "Connects passionate individuals with opportunities to serve our community.",
                  image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=400"
                }
              ].map((member, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group"
                >
                  <div className="relative mb-6 rounded-3xl overflow-hidden aspect-square">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <div className="text-primary font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-24 bg-warm-bg" id="programs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Empowerment Programs</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Holistic support designed to address the unique challenges faced by widows at every stage of their journey.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart className="w-8 h-8" />,
                  title: "Emotional Counseling",
                  desc: "Professional grief support and peer-led community circles to heal the heart and mind.",
                  color: "bg-rose-50 text-rose-600"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Financial Assistance",
                  desc: "Emergency grants and micro-loans to ensure families stay fed, housed, and in school.",
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  icon: <GraduationCap className="w-8 h-8" />,
                  title: "Skill Empowerment",
                  desc: "Vocational training and business mentorship to create sustainable, independent livelihoods.",
                  color: "bg-amber-50 text-amber-600"
                }
              ].map((program, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[32px] shadow-sm border border-slate-100"
                >
                  <div className={`w-16 h-16 ${program.color} rounded-2xl flex items-center justify-center mb-8`}>
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{program.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {program.desc}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact / Testimonial */}
        <section className="py-24 bg-primary text-white overflow-hidden relative" id="impact">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 border-4 border-white rounded-full" />
            <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-white rounded-full" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Quote className="w-16 h-16 text-secondary mb-8 opacity-50" />
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                  "I didn't just find help; I found a family that believed in my future when I couldn't see it myself."
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-slate-200 overflow-hidden border-2 border-white">
                    <img src="https://i.pravatar.cc/150?u=mary" alt="Mary" />
                  </div>
                  <div>
                    <div className="font-bold text-xl">Mary Wambui</div>
                    <div className="text-secondary font-medium">Beneficiary & Small Business Owner</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">$120k+</div>
                  <div className="text-sm opacity-80">Funds Distributed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">12</div>
                  <div className="text-sm opacity-80">Active Communities</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">2.4k</div>
                  <div className="text-sm opacity-80">Counseling Hours</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-sm opacity-80">Program Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white" id="involved">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-secondary rounded-[48px] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Change a Life Today</h2>
                <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto">
                  Your contribution provides more than just aid—it provides a path to dignity and independence for a widow in need.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-secondary px-10 py-4 rounded-full font-bold text-xl hover:shadow-xl transition-all active:scale-95"
                  >
                    Donate Now
                  </button>
                  <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-secondary transition-all active:scale-95">
                    Become a Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
