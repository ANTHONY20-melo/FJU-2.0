export function ActivitiesGrid({ activities, title = 'Atividades' }) {
  return (
    <section id="atividades" className="activities-section reveal">
      <h2>{title}</h2>
      <div className="activities-grid">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <article className="activity-card" key={activity.title}>
              {Icon && <Icon />}
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
