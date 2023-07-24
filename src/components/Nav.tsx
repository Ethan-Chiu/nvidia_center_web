import { motion } from "framer-motion"
import { useState } from "react"

const navMotion = {
    visible: {
        opacity: 1,

        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity: 0,
    },
}
const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
}
const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
}

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
        const delay = 1 + i * 0.5;
        return {
            pathLength: 1,
            opacity: 1,
            transition: {
                delay: 1,
                pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        };
    }
};

// Links
const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Blog", href: "/blog", id: 2 },
    { name: "Contact", href: "/contact", id: 3 },
]


const NavLinks = ({
    isMobile,
    className,
}: {
    isMobile: boolean
    className: string
}) => (
    <div className={className}>
        {navLinks.map(({ name, href, id }) => (
            <motion.a
                key={id}
                variants={isMobile ? itemMotion : itemMotionDesktop}
                href={href}
            >
                {name}
            </motion.a>
        ))}
    </div>
)

export default function Nav() {
    const [toggled, setToggled] = useState(false)
    return (
        <nav className="relative mx-8 mb-24 flex items-center justify-between pb-6 pt-12 font-medium md:mx-16 lg:mx-32">
            {/* Title */}
            <div className="relative w-40 h-10">
                <motion.svg
                    initial="hidden"
                    animate="visible"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                >
                    <motion.rect
                        x="0"
                        y="0"
                        variants={draw}
                        className="fill-transparent stroke-[5px] stroke-black w-full h-full"
                        strokeLinecap="square"
                    />
                </motion.svg>
                <div className="absolute top-0 w-full h-full p-1 flex justify-center">
                    <h1 className="text-lg font-bold">
                        <a href="/">Workshop</a>
                    </h1>
                </div>
            </div>

            {/* Nav Items animating in  */}
            {toggled && (
                <motion.div
                    variants={navMotion}
                    animate="visible"
                    initial="hidden"
                    className="fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center  gap-24 bg-white text-2xl font-bold"
                >
                    <NavLinks
                        className=" flex flex-col gap-24 text-lg "
                        isMobile={true}
                    />
                </motion.div>
            )}
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                className="hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
            >
                <NavLinks className="flex gap-12" isMobile={false} />
            </motion.div>

            {/* Hamburger Toggle */}
            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 25 }}
                transition={{ delay: 0.35 }}
                onClick={() => setToggled((prevToggle) => !prevToggle)}
                className={`burger z-50 cursor-pointer space-y-1.5 xl:hidden 
        `}
            >
                <motion.span
                    animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
                    className="line-1 block h-0.5 w-8 bg-black"
                ></motion.span>

                <motion.span
                    animate={{ width: toggled ? 0 : 24 }}
                    className="line-2 block h-0.5 w-6 bg-black"
                ></motion.span>
                <motion.span
                    animate={{
                        rotateZ: toggled ? -45 : 0,
                        y: toggled ? -8 : 0,
                        width: toggled ? 32 : 24,
                    }}
                    className="line-3 block h-0.5 w-4 bg-black"
                ></motion.span>
            </motion.div>
        </nav>
    )
}