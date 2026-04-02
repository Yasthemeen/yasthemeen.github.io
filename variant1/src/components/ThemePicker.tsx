import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon } from 'lucide-react';
import { useTheme, THEMES } from '../utils/ThemeContext';
export function ThemePicker() {
  const { currentThemeId, setThemeId, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-24 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: 20,
            scale: 0.9
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 300
          }}
          className="flex flex-col gap-1.5 p-3 rounded-2xl shadow-2xl border mb-2 min-w-[240px]"
          style={{
            backgroundColor: theme.isDark ? theme.card : '#FFFFFF',
            borderColor: theme.cardBorder
          }}>
          
            <p
            className="text-[10px] font-bold uppercase tracking-widest px-2 pt-1 pb-2"
            style={{
              color: theme.textMuted
            }}>
            
              Choose a vibe
            </p>
            {THEMES.map((t, i) => {
            const isActive = currentThemeId === t.id;
            return (
              <motion.button
                key={t.id}
                initial={{
                  opacity: 0,
                  x: 10
                }}
                animate={{
                  opacity: 1,
                  x: 0
                }}
                transition={{
                  delay: i * 0.04
                }}
                onClick={() => setThemeId(t.id)}
                className="flex items-center gap-3 p-2.5 rounded-xl transition-colors w-full text-left"
                style={{
                  backgroundColor: isActive ?
                  theme.isDark ?
                  'rgba(255,255,255,0.08)' :
                  `${t.primary}10` :
                  'transparent'
                }}>
                
                  {/* Three-color swatch */}
                  <div
                  className="w-9 h-9 rounded-lg shadow-sm overflow-hidden relative flex-shrink-0 flex"
                  style={{
                    border: `1.5px solid ${t.cardBorder}`
                  }}>
                  
                    <div
                    className="flex-1"
                    style={{
                      backgroundColor: t.primary
                    }} />
                  
                    <div
                    className="flex-1"
                    style={{
                      backgroundColor: t.secondary
                    }} />
                  
                    <div
                    className="flex-1"
                    style={{
                      backgroundColor: t.accent
                    }} />
                  
                    {isActive &&
                  <motion.div
                    initial={{
                      scale: 0
                    }}
                    animate={{
                      scale: 1
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.35)'
                    }}>
                    
                        <Check
                      size={14}
                      className="text-white"
                      strokeWidth={3} />
                    
                      </motion.div>
                  }
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                    className="text-sm font-semibold leading-tight truncate"
                    style={{
                      color: theme.text
                    }}>
                    
                      {t.name}
                    </div>
                    <div
                    className="text-[11px] leading-tight mt-0.5 truncate"
                    style={{
                      color: theme.textMuted
                    }}>
                    
                      {t.subtitle}
                    </div>
                  </div>

                  {t.isDark &&
                <Moon
                  size={12}
                  style={{
                    color: theme.textMuted
                  }}
                  className="flex-shrink-0" />

                }
                </motion.button>);

          })}
          </motion.div>
        }
      </AnimatePresence>

      <motion.button
        whileHover={{
          scale: 1.08
        }}
        whileTap={{
          scale: 0.92
        }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full shadow-lg flex items-center justify-center"
        style={{
          background: theme.gradient
        }}>
        
        <Palette size={20} className="text-white" />
      </motion.button>
    </div>);

}