export default function ScheduleSection() {
    return (
      <section id="schedule" className="section-with-bg">
        <div className="container wow fadeInUp">
          <div className="section-header">
            <h2>Event Schedule</h2>
            <p>Here is our event schedule</p>
          </div>
  
          <ul className="nav nav-tabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" href="#day-1" role="tab" data-toggle="tab">
                Day 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#day-2" role="tab" data-toggle="tab">
                Day 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#day-3" role="tab" data-toggle="tab">
                Day 3
              </a>
            </li>
          </ul>
  
          <h3 className="sub-heading">
            Voluptatem nulla veniam soluta et corrupti consequatur neque eveniet officia. Eius
            necessitatibus voluptatem quis labore perspiciatis quia.
          </h3>
  
          <div className="tab-content row justify-content-center">
            {/* Day 1 */}
            <div role="tabpanel" className="col-lg-9 tab-pane fade show active" id="day-1">
              {/* Schedule Items for Day 1 */}
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>09:30 AM</time>
                </div>
                <div className="col-md-10">
                  <h4>Registration</h4>
                  <p>Fugit voluptas iusto maiores temporibus autem numquam magnam.</p>
                </div>
              </div>
  
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src="/assets/img/speakers/1.jpg" alt="Brenden Legros" />
                  </div>
                  <h4>
                    Keynote <span>Brenden Legros</span>
                  </h4>
                  <p>Facere provident incidunt quos voluptas.</p>
                </div>
              </div>
  
              {/* Additional schedule items for Day 1 */}
              {/* Use the same pattern as above for other items */}
            </div>
  
            {/* Day 2 */}
            <div role="tabpanel" className="col-lg-9 tab-pane fade" id="day-2">
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src="/assets/img/speakers/1.jpg" alt="Brenden Legros" />
                  </div>
                  <h4>
                    Libero corrupti explicabo itaque. <span>Brenden Legros</span>
                  </h4>
                  <p>Facere provident incidunt quos voluptas.</p>
                </div>
              </div>
  
              {/* Additional schedule items for Day 2 */}
            </div>
  
            {/* Day 3 */}
            <div role="tabpanel" className="col-lg-9 tab-pane fade" id="day-3">
              <div className="row schedule-item">
                <div className="col-md-2">
                  <time>10:00 AM</time>
                </div>
                <div className="col-md-10">
                  <div className="speaker">
                    <img src="/assets/img/speakers/2.jpg" alt="Hubert Hirthe" />
                  </div>
                  <h4>
                    Et voluptatem iusto dicta nobis. <span>Hubert Hirthe</span>
                  </h4>
                  <p>Maiores dignissimos neque qui cum accusantium ut sit sint inventore.</p>
                </div>
              </div>
  
              {/* Additional schedule items for Day 3 */}
            </div>
          </div>
        </div>
      </section>
    );
  }