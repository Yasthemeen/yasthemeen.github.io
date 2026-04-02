import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Headphones,
  Hand,
  BookOpen,
  Mic,
  ArrowRight,
  Clock,
  Target,
  CheckCircle2,
  BarChart3,
  PlayCircle,
  Sparkles } from
'lucide-react';
import { useTheme } from '../utils/ThemeContext';
import { LEARNING_STYLES } from '../utils/styles';
const FORM_URL =
'https://docs.google.com/forms/d/e/1FAIpQLSf83_aP-US0bJhCSrUmqRo_fG36HIUqDt2VfJbuyaebt4TjWQ/viewform?usp=dialog';
export function LandingVariant1({
  onLoginClick


}: {onLoginClick: () => void;}) {
  const { theme } = useTheme();
  const colors = [
  theme.primary,
  theme.secondary,
  theme.accent,
  theme.primary,
  theme.secondary];

  return (
    <div
      className="min-h-screen font-sans selection:bg-black/10"
      style={{
        backgroundColor: theme.bg,
        color: theme.text
      }}>
      
      {/* Navigation */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
        style={{
          backgroundColor: `${theme.bg}CC`,
          borderColor: theme.cardBorder
        }}>
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
              style={{
                backgroundColor: theme.primary
              }}>
              
              L
            </div>
            <span className="font-bold text-xl tracking-tight">LearnWay</span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onLoginClick}
              className="text-sm font-semibold hover:opacity-80 transition-opacity"
              style={{
                color: theme.textSecondary
              }}>
              
              Sign In
            </button>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white shadow-md transition-transform hover:scale-105 active:scale-95"
              style={{
                background: theme.gradient
              }}>
              
              Get Early Access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="max-w-2xl relative z-10">
            
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border"
              style={{
                backgroundColor: `${theme.primary}15`,
                color: theme.primary,
                borderColor: `${theme.primary}30`
              }}>
              
              <Sparkles size={14} /> For Teachers
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
              Teach One Class.{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: theme.gradient
                }}>
                
                Deliver 30 Personalized Lessons.
              </span>
            </h1>
            <p
              className="text-lg md:text-xl mb-8 leading-relaxed"
              style={{
                color: theme.textSecondary
              }}>
              
              Stop teaching to the middle. LearnWay's AI identifies each
              student's dominant learning style and instantly generates a lesson
              designed <strong>only for them</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full text-white font-bold text-lg shadow-xl flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
                style={{
                  background: theme.gradient
                }}>
                
                Sign Up for Early Access <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          {/* Hero Visual: One Lesson → 5 Personalized Versions */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.7,
              delay: 0.3
            }}
            className="relative flex items-center justify-center">
            
            <div className="flex items-center gap-6 md:gap-8">
              {/* Source Lesson Card */}
              <div
                className="w-28 md:w-32 flex-shrink-0 p-4 rounded-2xl shadow-xl border-2 flex flex-col items-center gap-2 relative z-10"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.cardBorder
                }}>
                
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: `${theme.primary}15`
                  }}>
                  
                  <BookOpen
                    size={24}
                    style={{
                      color: theme.primary
                    }} />
                  
                </div>
                <span
                  className="text-xs font-bold text-center leading-tight"
                  style={{
                    color: theme.text
                  }}>
                  
                  Your Lesson
                </span>
                <span
                  className="text-[10px] font-medium"
                  style={{
                    color: theme.textMuted
                  }}>
                  
                  1 upload
                </span>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center gap-1 flex-shrink-0">
                <motion.div
                  animate={{
                    x: [0, 6, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}>
                  
                  <ArrowRight
                    size={28}
                    style={{
                      color: theme.primary
                    }} />
                  
                </motion.div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    color: theme.textMuted
                  }}>
                  
                  AI
                </span>
              </div>

              {/* 5 Personalized Output Cards */}
              <div className="flex flex-col gap-2">
                {LEARNING_STYLES.map((style, i) => {
                  const color = colors[i];
                  const Icon = style.icon;
                  return (
                    <motion.div
                      key={style.id}
                      initial={{
                        opacity: 0,
                        x: 20
                      }}
                      animate={{
                        opacity: 1,
                        x: 0
                      }}
                      transition={{
                        delay: 0.6 + i * 0.12,
                        type: 'spring',
                        stiffness: 200
                      }}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-xl border shadow-sm"
                      style={{
                        backgroundColor: theme.card,
                        borderColor: `${color}40`
                      }}>
                      
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${color}15`
                        }}>
                        
                        <Icon
                          size={16}
                          style={{
                            color
                          }} />
                        
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-bold leading-tight"
                          style={{
                            color: theme.text
                          }}>
                          
                          {style.label}
                        </p>
                        <p
                          className="text-[10px]"
                          style={{
                            color: theme.textMuted
                          }}>
                          
                          {style.id === 'visual' && 'Diagrams & animations'}
                          {style.id === 'auditory' && 'Audio narration'}
                          {style.id === 'kinesthetic' && 'Hands-on simulation'}
                          {style.id === 'reading' && 'Articles & notes'}
                          {style.id === 'verbal' && 'Discussion & debate'}
                        </p>
                      </div>
                      <CheckCircle2
                        size={14}
                        style={{
                          color
                        }}
                        className="flex-shrink-0 ml-auto" />
                      
                    </motion.div>);

                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="py-24 px-6 relative"
        style={{
          backgroundColor: theme.isDark ? 'rgba(255,255,255,0.02)' : '#F9FAFB'
        }}>
        
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            The One-Size-Fits-All Problem
          </h2>
          <p
            className="text-lg leading-relaxed mb-12"
            style={{
              color: theme.textSecondary
            }}>
            
            You know your students learn differently. But you can't manually
            create 5 versions of every lesson plan, worksheet, and activity.
            When you teach to the middle, visual learners miss out on diagrams,
            auditory learners tune out of reading, and kinesthetic learners get
            restless.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
            {
              stat: '74%',
              text: 'of teachers feel they lack time to differentiate instruction'
            },
            {
              stat: '5',
              text: 'distinct learning styles present in an average classroom'
            },
            {
              stat: '1',
              text: 'exhausted teacher trying to reach everyone'
            }].
            map((item, i) =>
            <div
              key={i}
              className="p-6 rounded-2xl border shadow-sm"
              style={{
                backgroundColor: theme.card,
                borderColor: theme.cardBorder
              }}>
              
                <div
                className="text-4xl font-black mb-2"
                style={{
                  color: theme.primary
                }}>
                
                  {item.stat}
                </div>
                <p
                className="text-sm font-medium"
                style={{
                  color: theme.textSecondary
                }}>
                
                  {item.text}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI That Knows Every Student
            </h2>
            <p
              className="text-lg"
              style={{
                color: theme.textSecondary
              }}>
              
              LearnWay identifies how each student learns best, then
              automatically translates your core lesson into their perfect
              format.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
            {
              icon: Target,
              title: '1. Diagnostic Quiz',
              desc: 'Students take a quick, gamified quiz to identify their dominant learning style.',
              color: theme.primary
            },
            {
              icon: Sparkles,
              title: '2. Auto-Generation',
              desc: 'Upload your lesson notes. Our AI instantly creates 5 distinct, style-specific variants.',
              color: theme.secondary
            },
            {
              icon: PlayCircle,
              title: '3. Personalized Delivery',
              desc: 'Each student logs in and receives the version of the lesson built exactly for them.',
              color: theme.accent
            }].
            map((step, i) =>
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: i * 0.2
              }}
              className="p-8 rounded-3xl border relative overflow-hidden group"
              style={{
                backgroundColor: theme.card,
                borderColor: theme.cardBorder
              }}>
              
                <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity group-hover:opacity-40"
                style={{
                  backgroundColor: step.color,
                  transform: 'translate(30%, -30%)'
                }} />
              
                <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{
                  backgroundColor: `${step.color}15`
                }}>
                
                  <step.icon
                  size={28}
                  style={{
                    color: step.color
                  }} />
                
                </div>
                <h3 className="text-xl font-bold mb-3 relative z-10">
                  {step.title}
                </h3>
                <p
                className="leading-relaxed relative z-10"
                style={{
                  color: theme.textSecondary
                }}>
                
                  {step.desc}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Product Demo Placeholder */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl border shadow-2xl overflow-hidden"
            style={{
              backgroundColor: theme.card,
              borderColor: theme.cardBorder
            }}>
            
            {/* Browser Chrome */}
            <div
              className="h-12 border-b flex items-center px-4 gap-2"
              style={{
                backgroundColor: theme.isDark ?
                'rgba(255,255,255,0.03)' :
                `${theme.primaryLight}`,
                borderColor: theme.cardBorder
              }}>
              
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div
                className="mx-auto px-4 py-1 rounded-md text-xs font-medium border shadow-sm"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.cardBorder,
                  color: theme.textMuted
                }}>
                
                teacher.learnway.app/dashboard
              </div>
            </div>
            {/* Mock Dashboard */}
            <div
              className="p-8"
              style={{
                backgroundColor: theme.bg
              }}>
              
              <div className="flex justify-between items-end mb-8">
                <div>
                  <h4 className="text-2xl font-bold mb-1">The Water Cycle</h4>
                  <p
                    className="text-sm"
                    style={{
                      color: theme.textSecondary
                    }}>
                    
                    Generated 5 personalized variants
                  </p>
                </div>
                <button
                  className="px-4 py-2 rounded-lg text-sm font-bold text-white shadow-md"
                  style={{
                    background: theme.gradient
                  }}>
                  
                  Publish to Class
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {LEARNING_STYLES.map((style, i) => {
                  const Icon = style.icon;
                  const color = colors[i];
                  return (
                    <div
                      key={style.id}
                      className="p-4 rounded-xl border shadow-sm"
                      style={{
                        backgroundColor: theme.card,
                        borderColor: theme.cardBorder
                      }}>
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{
                            backgroundColor: `${color}15`
                          }}>
                          
                          <Icon
                            size={20}
                            style={{
                              color
                            }} />
                          
                        </div>
                        <div>
                          <p className="font-bold text-sm">{style.label}</p>
                          <p
                            className="text-[10px] uppercase tracking-wider"
                            style={{
                              color: theme.textMuted
                            }}>
                            
                            Variant Ready
                          </p>
                        </div>
                      </div>
                      <div
                        className="h-1.5 w-full rounded-full overflow-hidden"
                        style={{
                          backgroundColor: `${color}15`
                        }}>
                        
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: '100%',
                            backgroundColor: color
                          }} />
                        
                      </div>
                    </div>);

                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Teachers Love Individualized Learning
              </h2>
              <p
                className="text-lg mb-8"
                style={{
                  color: theme.textSecondary
                }}>
                
                Stop compromising. Give every student the exact format they need
                to succeed, without spending your weekends planning.
              </p>
              <ul className="space-y-6">
                {[
                {
                  icon: Clock,
                  title: 'Save 10+ hours a week',
                  desc: 'No more creating multiple worksheets or slide decks.'
                },
                {
                  icon: CheckCircle2,
                  title: 'Every student gets their ideal format',
                  desc: 'Visual learners get diagrams; auditory learners get podcasts.'
                },
                {
                  icon: Target,
                  title: 'Teacher-approved AI content',
                  desc: 'You provide the core notes, AI formats it, you approve it.'
                },
                {
                  icon: BarChart3,
                  title: 'Track what works',
                  desc: 'See which learning styles correlate with the highest quiz scores.'
                }].
                map((item, i) =>
                <li key={i} className="flex gap-4">
                    <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${theme.primary}15`
                    }}>
                    
                      <item.icon
                      size={20}
                      style={{
                        color: theme.primary
                      }} />
                    
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p
                      style={{
                        color: theme.textSecondary
                      }}>
                      
                        {item.desc}
                      </p>
                    </div>
                  </li>
                )}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/5 to-transparent dark:via-white/5 rounded-3xl blur-2xl" />
              <div
                className="relative p-8 rounded-3xl border shadow-xl"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.cardBorder
                }}>
                
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) =>
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    viewBox="0 0 20 20">
                    
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
                <p
                  className="text-xl italic font-medium leading-relaxed mb-6"
                  style={{
                    color: theme.text
                  }}>
                  
                  "I used to feel guilty that I couldn't reach my kinesthetic
                  learners during heavy science lectures. Now, LearnWay
                  automatically generates an interactive simulation for them
                  while my reading-focused students get a structured article. My
                  class engagement has skyrocketed."
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src="https://i.pravatar.cc/150?u=teacher2"
                    alt="Teacher"
                    className="w-12 h-12 rounded-full" />
                  
                  <div>
                    <p className="font-bold">David Miller</p>
                    <p
                      className="text-sm"
                      style={{
                        color: theme.textMuted
                      }}>
                      
                      8th Grade Science Teacher
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-8 text-center border-t"
        style={{
          borderColor: theme.cardBorder,
          color: theme.textMuted
        }}>
        
        <p className="text-sm">
          © {new Date().getFullYear()} LearnWay Education. All rights reserved.
        </p>
      </footer>
    </div>);

}