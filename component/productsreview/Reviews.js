import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { initialTabs as tabs } from "./Ingredient.ts";

function Reviews() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container-fluid card-header">
          <ul className="navbar-nav nav nav-pills">
            {tabs.map((item) => (
              <li
                key={item.label}
                className="nav-link  "
                style={{
                  color: "#FF0099",
                  border: 0,
                }}
                onClick={() => setSelectedTab(item)}
              >
                {` ${item.label}`}
                {item === selectedTab ? (
                  <motion.div className="underline   " layoutId="underline" />
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            className="card my-3 py-3"
            key={selectedTab ? selectedTab.label : "empty"}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            <div className=" my-3 p-3">
              {selectedTab ? selectedTab.para : "😋"}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
export default Reviews;
