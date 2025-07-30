import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Crown } from 'lucide-react';

const PricingComparison = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Us Over <span className="text-red-600 line-through">Expensive Agencies</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we deliver 10x better results at a fraction of the cost
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Traditional Agency */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Traditional Agency</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">₹50,000+</div>
              <p className="text-gray-500">per month</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                { text: "Generic strategies", included: false },
                { text: "Multiple clients, less focus", included: false },
                { text: "High overhead costs", included: false },
                { text: "Slow response times", included: false },
                { text: "Basic reporting", included: true },
                { text: "No education expertise", included: false }
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className={feature.included ? "text-gray-700" : "text-gray-400 line-through"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Service - Featured */}
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 shadow-2xl border-2 border-blue-500 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full text-sm font-bold flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                BEST VALUE
              </div>
            </div>
            
            <div className="text-center mb-6 text-white">
              <h3 className="text-2xl font-bold mb-2">AdScale Pro</h3>
              <div className="text-4xl font-bold mb-2">₹25,000</div>
              <p className="text-blue-200">per month</p>
              <div className="text-sm text-blue-200 mt-2">
                <span className="line-through">₹50,000</span> - Limited Time 50% OFF
              </div>
            </div>
            
            <ul className="space-y-4 mb-8 text-white">
              {[
                "Coaching-specific strategies",
                "Dedicated account manager",
                "Transparent, low costs",
                "24/7 support & optimization",
                "Advanced analytics dashboard",
                "JEE/NEET/IELTS expertise"
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200"
            >
              Claim 50% Discount Now
            </motion.button>
          </motion.div>

          {/* DIY Approach */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-200 relative">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">DIY Approach</h3>
              <div className="text-4xl font-bold text-gray-600 mb-2">₹15,000+</div>
              <p className="text-gray-500">wasted monthly</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                { text: "Trial and error learning", included: false },
                { text: "Time away from teaching", included: false },
                { text: "Wasted ad spend", included: false },
                { text: "No expert guidance", included: false },
                { text: "Basic tools only", included: true },
                { text: "Steep learning curve", included: false }
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  {feature.included ? (
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 flex-shrink-0" />
                  )}
                  <span className={feature.included ? "text-gray-700" : "text-gray-400 line-through"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingComparison;