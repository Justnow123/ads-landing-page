import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Star, Users, TrendingUp, Award, CheckCircle, Target, BarChart3, Zap, Phone, Mail, MapPin, Clock, Shield, Rocket, Eye, MousePointer, DollarSign } from 'lucide-react';
import AnimatedCounter from './components/AnimatedCounter';
import FloatingElements from './components/FloatingElements';
import UrgencyTimer from './components/UrgencyTimer';
import SocialProof from './components/SocialProof';
import PricingComparison from './components/PricingComparison';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    institute: '',
    phone: '',
    email: '',
    category: 'JEE'
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-blue-600 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />

      {/* Social Proof Notifications */}
      <SocialProof />

      {/* Header */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AdScale Pro</span>
            </motion.div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300"
            >
              Book Free Strategy Call
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        <FloatingElements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-8">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="h-4 w-4 mr-2" />
                <span className="mr-2">Trusted by</span>
                <AnimatedCounter end={150} suffix="+" />
                <span className="ml-1">Coaching Institutes</span>
              </motion.div>
              
              <motion.h1 
                variants={itemVariants}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Get <motion.span 
                  className="text-blue-600"
                  animate={{ 
                    textShadow: ["0 0 0px #3B82F6", "0 0 20px #3B82F6", "0 0 0px #3B82F6"],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <AnimatedCounter end={3} />x More
                </motion.span> Quality Students for Your 
                <motion.span 
                  className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                  animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Coaching Institute
                </motion.span>
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Transform your JEE, NEET, and IELTS coaching center into a student magnet. 
                Our proven Meta and Google Ads strategies have generated <motion.span 
                  className="font-bold text-green-600"
                  whileHover={{ scale: 1.1 }}
                >
                  ₹<AnimatedCounter end={50} />+ crores
                </motion.span> in revenue for coaching institutes across India.
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                    y: -2
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center group"
                >
                  Get Your Free Marketing Audit
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-8 py-4 border-2 border-gray-300 hover:border-gray-400 rounded-xl font-semibold text-lg transition-all duration-300 bg-white hover:bg-gray-50"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Success Stories
                </motion.button>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="flex items-center space-x-8 pt-4"
              >
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1, color: "#3B82F6" }}
                  >
                    <AnimatedCounter end={150} suffix="+" />
                  </motion.div>
                  <div className="text-sm text-gray-600">Coaching Partners</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1, color: "#10B981" }}
                  >
                    ₹<AnimatedCounter end={50} />Cr+
                  </motion.div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <motion.div 
                    className="text-2xl font-bold text-gray-900"
                    whileHover={{ scale: 1.1, color: "#8B5CF6" }}
                  >
                    <AnimatedCounter end={5} />x
                  </motion.div>
                  <div className="text-sm text-gray-600">Average ROI</div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 25px 50px rgba(0, 0, 0, 0.1)",
                    "0 35px 60px rgba(59, 130, 246, 0.2)",
                    "0 25px 50px rgba(0, 0, 0, 0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="bg-white rounded-2xl p-8 border border-gray-100 relative overflow-hidden"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-50"
                  animate={{
                    background: [
                      "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 100%)",
                      "linear-gradient(135deg, #DBEAFE 0%, #C7D2FE 100%)",
                      "linear-gradient(135deg, #EFF6FF 0%, #E0E7FF 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      animate={{ color: ["#111827", "#3B82F6", "#111827"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      Get Your Free Strategy Session
                    </motion.h3>
                    <p className="text-gray-600">Discover how to 3x your enrollments in 90 days</p>
                    
                    {/* Urgency Timer */}
                    <div className="mt-4">
                      <UrgencyTimer />
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                      { name: 'institute', placeholder: 'Institute Name', type: 'text' },
                      { name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                      { name: 'email', placeholder: 'Email Address', type: 'email' }
                    ].map((field, index) => (
                      <motion.input
                        key={field.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileFocus={{ 
                          scale: 1.02, 
                          boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.1)" 
                        }}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                    ))}
                    
                    <motion.select
                      whileFocus={{ scale: 1.02 }}
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="JEE">JEE Coaching</option>
                      <option value="NEET">NEET Coaching</option>
                      <option value="IELTS">IELTS Coaching</option>
                      <option value="Multiple">Multiple Categories</option>
                    </motion.select>
                    
                    <motion.button
                      type="submit"
                      whileHover={{ 
                        scale: 1.02, 
                        boxShadow: "0 15px 30px rgba(34, 197, 94, 0.4)" 
                      }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300"
                    >
                      <motion.span
                        animate={{ opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🔥 Book Free Strategy Call Now
                      </motion.span>
                    </motion.button>
                  </form>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-sm text-gray-500 mt-4 flex items-center justify-center"
                  >
                    <Shield className="w-4 h-4 mr-1" />
                    No spam. Your information is 100% secure.
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, rgba(91, 33, 182, 0.2) 100%)",
              "linear-gradient(45deg, rgba(91, 33, 182, 0.2) 0%, rgba(30, 58, 138, 0.2) 100%)",
              "linear-gradient(45deg, rgba(30, 58, 138, 0.2) 0%, rgba(91, 33, 182, 0.2) 100%)"
            ]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Real Results from Real Coaching Institutes
            </h2>
            <p className="text-xl text-gray-300">
              See how we've transformed coaching businesses across India
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: TrendingUp, 
                value: 450, 
                suffix: '%', 
                label: 'Average Enrollment Increase',
                color: 'from-blue-600 to-blue-700',
                iconColor: 'text-blue-200'
              },
              { 
                icon: BarChart3, 
                value: 12.5, 
                prefix: '₹', 
                suffix: 'L', 
                label: 'Average Monthly Revenue Boost',
                color: 'from-green-600 to-green-700',
                iconColor: 'text-green-200'
              },
              { 
                icon: Users, 
                value: 25000, 
                suffix: '+', 
                label: 'Quality Leads Generated Monthly',
                color: 'from-purple-600 to-purple-700',
                iconColor: 'text-purple-200'
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.3)"
                }}
                className={`bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center transform transition-all duration-300 cursor-pointer`}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.iconColor}`} />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <AnimatedCounter 
                    end={stat.value} 
                    prefix={stat.prefix} 
                    suffix={stat.suffix}
                    decimals={stat.value === 12.5 ? 1 : 0}
                  />
                </motion.div>
                <div className={stat.iconColor}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <PricingComparison />

      {/* Problem & Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
                Are You Struggling with These <span className="text-red-600">Common Problems</span>?
              </h2>
              
              <div className="space-y-4">
                {[
                  "Low enrollment numbers despite having great teachers",
                  "Wasted money on ineffective traditional marketing",
                  "Unable to compete with bigger coaching chains",
                  "Difficulty in reaching quality students online",
                  "No clear ROI from your marketing investments"
                ].map((problem, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-red-50 transition-all duration-200 cursor-pointer"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    />
                    <p className="text-gray-700 text-lg">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Here's How We <span className="text-green-600">Solve It</span>:
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Precision Targeting",
                    description: "Reach students actively searching for JEE, NEET, and IELTS coaching in your area"
                  },
                  {
                    icon: Zap,
                    title: "High-Converting Ads",
                    description: "Create compelling ad creatives that resonate with students and parents"
                  },
                  {
                    icon: BarChart3,
                    title: "Data-Driven Optimization",
                    description: "Continuously optimize campaigns for maximum ROI and lowest cost per enrollment"
                  }
                ].map((solution, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.1)" 
                    }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <solution.icon className="h-6 w-6 text-blue-600" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                      <p className="text-gray-600">{solution.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Performance Marketing System
            </h2>
            <p className="text-xl text-gray-600">
              We focus on just two platforms that deliver the best results for coaching institutes
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                platform: 'Meta Ads (Facebook & Instagram)',
                color: 'bg-blue-600',
                bgColor: 'bg-blue-100',
                description: 'Reach students where they spend most of their time. Our Meta campaigns generate high-quality leads at 60% lower cost than industry average.',
                features: [
                  'Advanced audience targeting based on education interests',
                  'Compelling video and carousel ad creatives',
                  'Retargeting campaigns for higher conversions',
                  'Lead generation forms integrated with your CRM'
                ]
              },
              {
                platform: 'Google Ads',
                color: 'bg-red-600',
                bgColor: 'bg-red-100',
                description: 'Capture students actively searching for coaching. Our Google campaigns achieve 8x ROAS on average with strategic keyword targeting.',
                features: [
                  'Search campaigns for high-intent keywords',
                  'Display campaigns for brand awareness',
                  'YouTube ads targeting education content viewers',
                  'Local campaigns for nearby student acquisition'
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer group"
              >
                <motion.div 
                  className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mb-6`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <div className={`w-8 h-8 ${service.color} rounded`}></div>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.platform}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Coaching Institute Owners Say
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                institute: "Prime JEE Academy, Delhi",
                content: "AdScale Pro transformed our business completely. We went from 50 students to 200+ in just 6 months. Their Meta ads strategy is incredible!",
                rating: 5,
                result: "300% enrollment increase"
              },
              {
                name: "Dr. Priya Sharma",
                institute: "Excel NEET Coaching, Mumbai",
                content: "Best investment we ever made. The Google Ads campaigns brought us qualified leads daily. Our revenue doubled in the first quarter itself.",
                rating: 5,
                result: "100% revenue growth"
              },
              {
                name: "Mohammad Ali",
                institute: "Global IELTS Hub, Bangalore",
                content: "Professional, results-driven team. They understand the coaching business deeply. Our cost per lead dropped by 70% while quality improved significantly.",
                rating: 5,
                result: "70% reduction in cost per lead"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (index * 0.2) + (i * 0.1) }}
                    >
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600 mb-2">{testimonial.institute}</div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {testimonial.result}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)",
              "linear-gradient(45deg, #7C3AED 0%, #2563EB 50%, #4F46E5 100%)",
              "linear-gradient(45deg, #4F46E5 0%, #7C3AED 50%, #2563EB 100%)",
              "linear-gradient(45deg, #2563EB 0%, #4F46E5 50%, #7C3AED 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold mb-6"
          >
            Ready to Transform Your Coaching Institute?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8 text-blue-100"
          >
            Join <AnimatedCounter end={150} suffix="+" /> successful coaching institutes who've 3x their enrollments with our proven system.
            Book your free strategy session today and discover your growth potential.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              🚀 Book Free Strategy Call
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              📊 Download Free Guide
            </motion.button>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-sm text-blue-200 mt-4 flex items-center justify-center"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ⚡
            </motion.span>
            <span className="ml-1">Limited slots available this month. No obligations, just valuable insights.</span>
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <motion.div 
                className="flex items-center space-x-2 mb-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">AdScale Pro</span>
              </motion.div>
              <p className="text-gray-400 mb-6 max-w-md">
                India's leading performance marketing agency for coaching institutes. 
                We specialize in Meta and Google Ads for JEE, NEET, and IELTS coaching centers.
              </p>
              <div className="flex space-x-4">
                {[Phone, Mail].map((Icon, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                {['Meta Ads Management', 'Google Ads Management', 'Landing Page Optimization', 'Analytics & Reporting'].map((service, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5, color: '#ffffff' }}
                    className="cursor-pointer transition-all duration-200"
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                {[
                  { icon: Phone, text: '+91 98765 43210' },
                  { icon: Mail, text: 'hello@adscalepro.com' },
                  { icon: MapPin, text: 'Mumbai, India' }
                ].map((contact, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ x: 5, color: '#ffffff' }}
                    className="flex items-center space-x-2 cursor-pointer transition-all duration-200"
                  >
                    <contact.icon className="h-4 w-4" />
                    <span>{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400"
          >
            <p>&copy; 2025 AdScale Pro. All rights reserved. Designed for coaching institute success.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default App;