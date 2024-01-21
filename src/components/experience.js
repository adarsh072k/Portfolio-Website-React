import styles from '../experience.module.css';
import WorkExperience from './workExperience';
import { motion } from 'framer-motion';
import { fadeIn } from "../variants";


const Experience = () => {
    const experienceDetails = [
        {'image': 'https://media.licdn.com/dms/image/C560BAQHhiTCbV0aqHw/company-logo_100_100/0/1662731453577/whizoidstudio_logo?e=1710979200&v=beta&t=UaCSKuQlr_Dc67GOw4mqv-EXNe9vBrp1i9GtSQGMvl0',
        'role': 'Web Developer',
        'organisation': 'Whizoid Studio',
        'jobType': 'Internship',
        'duration': 'Aug 2023 - Oct 2023',
        'location': 'Indore, Madhya Pradesh',
        'locationType': 'Remote',
        'description': [
                        'Demonstrated proficiency in web development technologies and best practices, contributing to the successful delivery of internal and client projects.',
                        'WhizoCart (Internal Project): Enhanced user engagement and boosted performance by 35% through UI optimization and asynchronous programming, resulting in a more dynamic and responsive shopping experience.',
                        'TravelNeuro (Client Project): Developed a tour booking platform using WordPress and Laravel, enabling users to book tours for various tourist destinations.'
                        ]
        }
    ]
    return(
        <motion.div className="flex flex-col mt-14 gap-5 w-custom-width items-center"
        variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}>

            <div className={styles['header-container']}>
                <div className={styles['title']}>
                    Experience
                </div>
            </div>
            <div className={styles['work-experience-container']}>
                {
                    experienceDetails.map((work, index) => {
                        return <WorkExperience work={work} key={index} />
                    })
                }
            </div>

            <div className={styles['header-container']}>
                <div className={styles['title']}>
                    Experience
                </div>
            </div>
            <div className={styles['work-experience-container']}>
                {
                    experienceDetails.map((work, index) => {
                        return <WorkExperience work={work} key={index} />
                    })
                }
            </div>
        </motion.div>

        
    )
}
export default Experience;