---
hide:
  - navigation
  - toc
  - path
  - tabs
  - tabs.sticky
title: בית
---

<!-- Hero Section Container -->
<div class="hero-container" style="
  position: relative;
  text-align: center;
  color: white; /* צבע טקסט כללי, יוחל על ה-h1 וה-p */
  padding: 6rem 1rem; /* רווח פנימי גדול יותר מלמעלה ולמטה */
  overflow: hidden;

  /* גורם לבלוק למלא את כל רוחב המסך (viewport) */
  
  
">
  <div class="hero-background-image" style="
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -3; /* התמונה הכי אחורה */
  ">
    <!-- החלף את הנתיב לתמונה שלך כאן -->
    <img src="assest/1.webp" alt="רקע אוטומציה מודרני" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.4;">
    <!-- הערה: ה-opacity כאן קובע כמה התמונה עצמה תהיה "עמומה" -->
  </div>

  <!-- 2. Dark Overlay Layer (שכבת כיסוי כהה לשיפור קריאות הטקסט) -->
  <div class="hero-overlay" style="
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-color: rgba(0, 0, 0, 0.1); /* צבע שחור עם 50% שקיפות. שנה את ה-0.5 לערך אחר (למשל 0.3-0.7) כדי לשלוט בכמות ההכהיה */
    z-index: -2; /* מעל התמונה, מתחת לתוכן */
  "></div>
  
  <!-- 3. Gradient Overlay Layer (שכבת כיסוי בצבעי המותג - אופציונלי אך מומלץ) -->
  <div class="hero-gradient-overlay" style="
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    /* גרדיאנט עדין עם שקיפות בצבעי המותג, חזק יותר במרכז */
    background: radial-gradient(circle at center, rgba(54, 161, 179, 0.15) 0%, rgba(136, 212, 165, 0.05) 50%, rgba(0,0,0,0) 100%);
    z-index: -1; /* מעל הכיסוי הכהה, מתחת לתוכן */
  "></div>


  <!-- 4. Content Layer (הטקסט המקורי שלך) -->
  <div class="hero-content" style="position: relative; z-index: 1;"> <!-- תוודא שהתוכן תמיד מעל הכל -->
    <h1 style="font-size: 3.5rem; font-weight: 700; margin-bottom: 1rem; color: white;">
      הופכים מורכב לפשוט. <span style="color: var(--md-primary-fg-color);">בקליק.</span>
    </h1>
    <p style="font-size: 1.4rem; max-width: 600px; margin: 0 auto 2rem auto; color: rgba(255, 255, 255, 0.9);">
      אנחנו הופכים פעולות טכניות, מסורבלות שחוזרות על עצמן לסקריפטים חכמים שעושים את העבודה בלחיצת כפתור אחת.
    </p>
    <a href="צור_קשר/צור_קשר/" class="md-button md-button--primary" style="font-size: 1.1rem; padding: 0.8rem 1.6rem;">
      בואו נדבר על אוטומציה
    </a>
    <a href="השירותים_שלנו/כתיבת_סקריפטים_לאוטומציה/" class="md-button" style="font-size: 1.1rem; padding: 0.8rem 1.6rem;">
      צפו בשירותים שלנו
    </a>
  </div>

</div>

---

## המומחיות שלנו: לחסוך לך זמן יקר

במקום לבזבז שעות על פעולות ידניות, אנחנו בונים כלים קטנים וחכמים שעובדים בשבילך. המטרה שלנו היא פשוטה: למנוע טעויות, לייעל תהליכים ולעזור לך להתמקד במה שחשוב באמת.

<div class="service-row">
  <div class="service-image">
    <!-- החלף את 'path/to/your/automation-image.jpg' בנתיב לתמונה שיצרת -->
    <img src="assest/3.webp" alt="אוטומציה לדפדפן ולמחשב">
  </div>
  <div class="service-text">
    <h3>אוטומציה לדפדפן ולמחשב</h3>
    <p>
      אנו הופכים פעולות חוזרות ומייגעות באתרי אינטרנט או בתוכנות השונות ללחיצת כפתור בודדת. הפתרון מושלם למנהלי חשבונות, משרדים, ועסקים שרוצים לחסוך זמן יקר ולמנוע טעויות אנוש.
    </p>
    <a href="השירותים_שלנו/כתיבת_סקריפטים_לאוטומציה/" class="md-button md-button--primary">
      לפרטים נוספים
    </a>
  </div>
</div>

<!-- Service 2: Excel & Word Solutions (Text on the Left, Image on the Right) -->
<div class="service-row service-row--reverse">
  <div class="service-image">
    <!-- החלף את 'path/to/your/excel-image.jpg' בנתיב לתמונה שיצרת -->
    <img src="assest/4.webp" alt="פתרונות חכמים באקסל ו-Word">
  </div>
  <div class="service-text">
    <h3>פתרונות חכמים באקסל ו-Word</h3>
    <p>
      אנו בונים חוברות אקסל מקצועיות עם נוסחאות מורכבות, ומפתחים כלי אוטומציה למסמכי וורד באמצעות VBA. אנחנו דואגים שהנתונים והמספרים יעבדו בשבילך, בצורה מדויקת וחכמה.
    </p>
    <a href="השירותים_שלנו/חוברות_עבודה_מקצועיות_באקסל/" class="md-button md-button--primary">
      לפרטים נוספים
    </a>
  </div>
</div>

<!-- Service 3: App Translation (Image on the Left, Text on the Right) -->
<div class="service-row">
  <div class="service-image">
    <!-- החלף את 'path/to/your/translation-image.jpg' בנתיב לתמונה שיצרת -->
    <img src="assest/5.webp" alt="תרגום והתאמת אפליקציות">
  </div>
  <div class="service-text">
    <h3>תרגום והתאמת אפליקציות</h3>
    <p>
      נתקלת באפליקציה חיונית שאינה זמינה בשפה שלך? אנו מתמחים בתרגום והתאמה של תוכנות ואפליקציות באמצעות הנדסה לאחור, כדי לספק לך גרסה מותאמת אישית ללא תלות במפתח המקורי.
    </p>
    <a href="השירותים_שלנו/תרגום_אפליקציות/" class="md-button md-button--primary">
      לפרטים נוספים
    </a>
  </div>
</div>

<!-- Why Choose Us Section -->
<div class="why-us-section">
  <h2>למה לבחור בנו?</h2>
  <p class="why-us-quote">
    כי אנחנו הופכים תהליך מורכב -
    <span class="highlight">לפשוט, נוח ומהיר.</span>
  </p>
</div>

<div class="grid cards" markdown>

-   __חיסכון אדיר בזמן__
    
    :material-clock-fast:{ .lg .middle }
    
    ---
    
    פעולות שלקחו דקות ארוכות מתבצעות כעת בשנייה, ומאפשרות לך ולעובדים שלך להתפנות למשימות החשובות באמת.

-   __דיוק מירבי, אפס טעויות__

    :material-target:{ .lg .middle }

    ---
    
    אוטומציה מונעת טעויות אנוש הנובעות מעייפות או חוסר ריכוז. התוצאה: עבודה נקייה, מדויקת ואמינה יותר.

-   __פתרון מותאם אישית__

    :material-tools:{ .lg .middle }

    ---

    אנחנו לא מוכרים מוצר מדף. כל כלי שאנחנו מפתחים נולד מצורך אמיתי שלך, ומותאם במדויק לתהליכי העבודה שלך.

</div>

---

## יש לך רעיון או צורך? בוא נהפוך אותו לכלי שעובד

נמאס לך להילחם בממשקים מסורבלים? יש לך תהליך עבודה שגורם לך לתסכול?
זה הזמן לשים לזה סוף.

<p style="text-align: center;">
  <a href="צור_קשר/צור_קשר/" class="md-button md-button--primary" style="font-size: 1.1rem; padding: 0.8rem 1.6rem;">
    אני רוצה לייעל את העבודה שלי
  </a>
</p>
