import styles from '../experience.module.css';
const WorkExperience = (props) => {
    return(
        <div className={styles['single-experience']}>
            <div className={styles['image-container']}>
                <img src={props.work.image} />
            </div>
            <div className={styles['details-container']}>
                <div className={styles['role-container']}>
                    <div className={styles['role']}>
                        {props.work.role}
                    </div>
                    <div className={styles['organisation-jobType-container']}>
                        <div className={styles['organisation-container']}>
                            {props.work.organisation}
                        </div>
                        <div className={styles.dot}>.</div>
                        <div className={styles['jobType-container']}>
                            {props.work.jobType}
                        </div>
                    </div>
                    <div className={styles.duration}>
                        {props.work.duration}
                    </div>
                    <div className={styles['location-container']}>
                        <div className={styles['location']}>
                            {props.work.location}
                        </div>
                        <div>.</div>
                        <div className={styles['location-type']}>
                            {props.work.locationType}
                        </div>
                    </div>

                </div>
                <ul className={styles['description-container']}>
                    {
                        props.work.description.map((item, index) => {
                            return <li className={styles['description-item']}>
                                    {item}
                                </li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default WorkExperience;