import { adminStyles } from './adminStyles';

function AdminCardHeader({ icon, title, description, teal = false }) {
    return (
        <header className={adminStyles.cardHeader}>
            <span className={`${adminStyles.icon} ${teal ? adminStyles.iconTeal : ''}`} aria-hidden="true">
                <i className={icon} />
            </span>
            <section>
                <h2 className={`text-base font-bold ${adminStyles.sectionTitle}`}>{title}</h2>
                <p className={adminStyles.sectionDescription}>{description}</p>
            </section>
        </header>
    );
}

export default AdminCardHeader;
