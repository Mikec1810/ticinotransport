const TRANSLATIONS = {
    // ===== NAV =====
    nav_servizi: { it:'Servizi', en:'Services', de:'Dienste', fr:'Services', ru:'Услуги', ar:'الخدمات' },
    nav_noleggio: { it:'Noleggio', en:'Rental', de:'Vermietung', fr:'Location', ru:'Аренда', ar:'تأجير' },
    nav_prenota: { it:'Prenota', en:'Book', de:'Buchen', fr:'Réserver', ru:'Забронировать', ar:'احجز' },
    nav_gallery: { it:'Gallery', en:'Gallery', de:'Galerie', fr:'Galerie', ru:'Галерея', ar:'معرض' },
    nav_contatti: { it:'Contatti', en:'Contact', de:'Kontakt', fr:'Contact', ru:'Контакты', ar:'اتصل بنا' },

    // ===== HERO =====
    hero_badge: { it:'Trasporti &middot;Noleggio &middot;Pratiche', en:'Transport &middot;Rental &middot;Services', de:'Transport &middot;Vermietung &middot;Dienste', fr:'Transport &middot;Location &middot;Services', ru:'Транспорт &middot;Аренда &middot;Услуги', ar:'نقل &middot;تأجير &middot;خدمات' },
    hero_h1: { it:'Trasporto veicoli, noleggio furgoni, pratiche doganali. Svizzera e estero.', en:'Vehicle transport, van rental, customs procedures. Switzerland and abroad.', de:'Fahrzeugtransport, Transportervermietung, Zollformalit&auml;ten. Schweiz und Ausland.', fr:'Transport de v&eacute;hicules, location de fourgons, formalit&eacute;s douani&egrave;res. Suisse et &eacute;tranger.', ru:'Перевозка транспорта, аренда фургонов, таможенные процедуры. Швейцария и за рубежом.', ar:'نقل المركبات، تأجير الشاحنات، الإجراءات الجمركية. سويسرا والخارج.' },
    hero_title_1: { it:'Auto, moto, furgoni.', en:'Cars, bikes, vans.', de:'Autos, Motorräder, Transporter.', fr:'Voitures, motos, fourgons.', ru:'Авто, мото, фургоны.', ar:'سيارات، دراجات، شاحنات.' },
    hero_title_2: { it:'Ci pensiamo noi.', en:'We handle it.', de:'Wir kümmern uns.', fr:'On s\'en occupe.', ru:'Мы позаботимся.', ar:'نحن نتولى الأمر.' },
    hero_desc: {
        it:'Trasporto veicoli, noleggio furgoni per traslochi, pratiche doganali, autosoccorso stradale e compravendita. Un\'agenzia, tutti i servizi. Svizzera e estero.',
        en:'Vehicle transport, van rental, customs procedures and trade. One agency, all services. Switzerland and abroad.',
        de:'Fahrzeugtransport, Transportervermietung, Zollformalitäten und Handel. Eine Agentur, alle Dienste. Schweiz und Ausland.',
        fr:'Transport de véhicules, location de fourgons, formalités douanières et commerce. Une agence, tous les services. Suisse et étranger.',
        ru:'Перевозка транспорта, аренда фургонов, таможенные процедуры и купля-продажа. Одно агентство — все услуги. Швейцария и за рубежом.',
        ar:'نقل المركبات، تأجير الشاحنات، الإجراءات الجمركية والتجارة. وكالة واحدة، جميع الخدمات. سويسرا والخارج.'
    },
    hero_btn_services: { it:'Scopri i servizi', en:'Discover services', de:'Dienste entdecken', fr:'Découvrir les services', ru:'Узнать больше', ar:'اكتشف الخدمات' },
    hero_btn_wa: { it:'WhatsApp', en:'WhatsApp', de:'WhatsApp', fr:'WhatsApp', ru:'WhatsApp', ar:'واتساب' },
    stat_coverage: { it:'Copertura', en:'Coverage', de:'Abdeckung', fr:'Couverture', ru:'Покрытие', ar:'التغطية' },
    stat_response: { it:'Risposta', en:'Response', de:'Antwort', fr:'Réponse', ru:'Ответ', ar:'الاستجابة' },
    stat_insured: { it:'Assicurato', en:'Insured', de:'Versichert', fr:'Assuré', ru:'Застраховано', ar:'مؤمن' },

    // ===== SERVIZI =====
    serv_tag: { it:'Servizi', en:'Services', de:'Dienste', fr:'Services', ru:'Услуги', ar:'الخدمات' },
    serv_title_1: { it:'Un\'agenzia per ogni esigenza.', en:'One agency for every need.', de:'Eine Agentur für jeden Bedarf.', fr:'Une agence pour chaque besoin.', ru:'Агентство для любых задач.', ar:'وكالة لكل احتياجاتك.' },
    serv_title_2: { it:'Dalla A alla Z.', en:'From A to Z.', de:'Von A bis Z.', fr:'De A à Z.', ru:'От А до Я.', ar:'من الألف إلى الياء.' },
    serv_transport_title: { it:'Trasporto Veicoli', en:'Vehicle Transport', de:'Fahrzeugtransport', fr:'Transport de Véhicules', ru:'Перевозка транспорта', ar:'نقل المركبات' },
    serv_transport_desc: { it:'Auto, moto e supercar. Ritiro e consegna porta a porta, Svizzera e estero.', en:'Cars, bikes and supercars. Door-to-door pickup and delivery, Switzerland and abroad.', de:'Autos, Motorräder und Supersportwagen. Tür-zu-Tür Abholung und Lieferung, Schweiz und Ausland.', fr:'Voitures, motos et supercars. Prise en charge et livraison porte à porte, Suisse et étranger.', ru:'Авто, мото и суперкары. Доставка от двери до двери, Швейцария и за рубежом.', ar:'سيارات ودراجات وسيارات خارقة. استلام وتسليم من الباب إلى الباب، سويسرا والخارج.' },
    serv_rental_title: { it:'Noleggio Furgoni', en:'Van Rental', de:'Transportervermietung', fr:'Location de Fourgons', ru:'Аренда фургонов', ar:'تأجير الشاحنات' },
    serv_rental_desc: { it:'Citroen Jumpy e Fiat Ducato. Traslochi, trasporti e ogni tua esigenza.', en:'Citroen Jumpy and Fiat Ducato. Moving, transport and every need.', de:'Citroen Jumpy und Fiat Ducato. Umzüge, Transporte und jeder Bedarf.', fr:'Citroen Jumpy et Fiat Ducato. Déménagements, transports et chaque besoin.', ru:'Citroen Jumpy и Fiat Ducato. Переезды, перевозки и любые нужды.', ar:'سيتروين جامبي وفيات دوكاتو. نقل وتأجير لكل احتياجاتك.' },
    serv_customs_title: { it:'Pratiche e Dogana', en:'Customs & Paperwork', de:'Zoll & Formalitäten', fr:'Douane & Formalités', ru:'Таможня и документы', ar:'الجمارك والأوراق' },
    serv_customs_desc: { it:'Importazione, esportazione, immatricolazione, targhe e documenti veicoli.', en:'Import, export, registration, plates and vehicle documents.', de:'Import, Export, Zulassung, Nummernschilder und Fahrzeugdokumente.', fr:'Importation, exportation, immatriculation, plaques et documents véhicules.', ru:'Импорт, экспорт, регистрация, номера и документы на транспорт.', ar:'استيراد، تصدير، تسجيل، لوحات ووثائق المركبات.' },
    serv_trade_title: { it:'Compravendita', en:'Buy & Sell', de:'Kauf & Verkauf', fr:'Achat & Vente', ru:'Купля-продажа', ar:'شراء وبيع' },
    serv_trade_desc: { it:'Ti seguiamo nell\'acquisto e vendita. Ritiro, consegna e pratiche incluse.', en:'We assist in buying and selling. Pickup, delivery and paperwork included.', de:'Wir unterstützen beim Kauf und Verkauf. Abholung, Lieferung und Formalitäten inklusive.', fr:'Nous vous accompagnons dans l\'achat et la vente. Prise en charge, livraison et formalités incluses.', ru:'Сопровождаем покупку и продажу. Вывоз, доставка и оформление включены.', ar:'نساعدك في الشراء والبيع. الاستلام والتسليم والأوراق مشمولة.' },
    serv_price_from: { it:'Da CHF 80.-/giorno', en:'From CHF 80.-/day', de:'Ab CHF 80.-/Tag', fr:'Dès CHF 80.-/jour', ru:'От CHF 80.-/день', ar:'من 80.- فرنك/يوم' },
    serv_price_quote: { it:'Preventivo gratuito', en:'Free quote', de:'Kostenloser Kostenvoranschlag', fr:'Devis gratuit', ru:'Бесплатная оценка', ar:'عرض سعر مجاني' },
    serv_price_full: { it:'Assistenza completa', en:'Full assistance', de:'Komplette Betreuung', fr:'Assistance complète', ru:'Полное сопровождение', ar:'مساعدة كاملة' },
    serv_price_complete: { it:'Servizio completo', en:'Full service', de:'Komplettservice', fr:'Service complet', ru:'Полный сервис', ar:'خدمة شاملة' },

    // ===== NOLEGGIO =====
    rent_tag: { it:'Noleggio', en:'Rental', de:'Vermietung', fr:'Location', ru:'Аренда', ar:'تأجير' },
    rent_title: { it:'Noleggio Furgoni', en:'Van Rental', de:'Transportervermietung', fr:'Location de Fourgons', ru:'Аренда фургонов', ar:'تأجير الشاحنات' },
    rent_subtitle: { it:'Scegli il furgone, seleziona le date e prenota direttamente online', en:'Choose your van, select dates and book directly online', de:'Wählen Sie Ihren Transporter, Daten und buchen Sie direkt online', fr:'Choisissez votre fourgon, sélectionnez les dates et réservez directement en ligne', ru:'Выберите фургон, даты и бронируйте онлайн', ar:'اختر الشاحنة، حدد التواريخ واحجز مباشرة عبر الإنترنت' },
    rent_compact: { it:'Compatto', en:'Compact', de:'Kompakt', fr:'Compact', ru:'Компактный', ar:'مدمج' },
    rent_large: { it:'Grande', en:'Large', de:'Gross', fr:'Grand', ru:'Большой', ar:'كبير' },
    rent_jumpy_desc: { it:'Ideale per piccoli trasporti e consegne in citta.', en:'Ideal for small transport and city deliveries.', de:'Ideal für kleine Transporte und Stadtlieferungen.', fr:'Idéal pour petits transports et livraisons en ville.', ru:'Идеален для небольших перевозок и доставок по городу.', ar:'مثالي للنقل الصغير والتوصيل داخل المدينة.' },
    rent_ducato_desc: { it:'Perfetto per traslochi e carichi voluminosi.', en:'Perfect for moving and bulky loads.', de:'Perfekt für Umzüge und sperrige Ladungen.', fr:'Parfait pour déménagements et charges volumineuses.', ru:'Идеален для переездов и крупных грузов.', ar:'مثالي للنقل والأحمال الضخمة.' },
    rent_day: { it:'/giorno', en:'/day', de:'/Tag', fr:'/jour', ru:'/день', ar:'/يوم' },
    van_specs_show: { it:'Dimensioni', en:'Dimensions', de:'Abmessungen', fr:'Dimensions', ru:'Размеры', ar:'الأبعاد' },
    rent_book: { it:'Prenota', en:'Book', de:'Buchen', fr:'Réserver', ru:'Забронировать', ar:'احجز' },

    // ===== PRENOTA =====
    book_tag: { it:'Prenota online', en:'Book online', de:'Online buchen', fr:'Réservez en ligne', ru:'Онлайн-бронирование', ar:'احجز عبر الإنترنت' },
    book_title: { it:'Prenota il tuo furgone', en:'Book your van', de:'Buchen Sie Ihren Transporter', fr:'Réservez votre fourgon', ru:'Забронируйте фургон', ar:'احجز شاحنتك' },
    book_subtitle: { it:'Compila il modulo e invia tutto su WhatsApp', en:'Fill out the form and send everything via WhatsApp', de:'Füllen Sie das Formular aus und senden Sie alles per WhatsApp', fr:'Remplissez le formulaire et envoyez tout par WhatsApp', ru:'Заполните форму и отправьте все через WhatsApp', ar:'املأ النموذج وأرسل كل شيء عبر واتساب' },
    book_step1: { it:'Scegli il furgone', en:'Choose your van', de:'Transporter wählen', fr:'Choisissez le fourgon', ru:'Выберите фургон', ar:'اختر الشاحنة' },
    book_step2: { it:'Seleziona le date', en:'Select dates', de:'Daten wählen', fr:'Sélectionnez les dates', ru:'Выберите даты', ar:'حدد التواريخ' },
    book_step3: { it:'Dati del cliente', en:'Client details', de:'Kundendaten', fr:'Données du client', ru:'Данные клиента', ar:'بيانات العميل' },
    book_step4: { it:'Documenti e note', en:'Documents & notes', de:'Dokumente & Notizen', fr:'Documents & notes', ru:'Документы и заметки', ar:'المستندات والملاحظات' },
    cal_available: { it:'Disponibile', en:'Available', de:'Verfügbar', fr:'Disponible', ru:'Свободно', ar:'متاح' },
    cal_booked: { it:'Occupato', en:'Booked', de:'Belegt', fr:'Occupé', ru:'Занято', ar:'محجوز' },
    cal_selected: { it:'Selezionato', en:'Selected', de:'Ausgewählt', fr:'Sélectionné', ru:'Выбрано', ar:'محدد' },
    cal_pickup: { it:'Data ritiro', en:'Pickup date', de:'Abholdatum', fr:'Date de retrait', ru:'Дата получения', ar:'تاريخ الاستلام' },
    cal_return: { it:'Data riconsegna', en:'Return date', de:'Rückgabedatum', fr:'Date de retour', ru:'Дата возврата', ar:'تاريخ الإرجاع' },
    cal_total: { it:'Totale stimato', en:'Estimated total', de:'Geschätzter Gesamtbetrag', fr:'Total estimé', ru:'Ориентировочная сумма', ar:'المجموع التقديري' },
    cal_select: { it:'Seleziona sul calendario', en:'Select on calendar', de:'Im Kalender wählen', fr:'Sélectionnez sur le calendrier', ru:'Выберите на календаре', ar:'حدد على التقويم' },
    time_pickup: { it:'Ora ritiro', en:'Pickup time', de:'Abholzeit', fr:'Heure de retrait', ru:'Время получения', ar:'وقت الاستلام' },
    time_return: { it:'Ora riconsegna', en:'Return time', de:'Rückgabezeit', fr:'Heure de retour', ru:'Время возврата', ar:'وقت الإرجاع' },
    form_name: { it:'Nome e Cognome *', en:'Full name *', de:'Vor- und Nachname *', fr:'Nom et prénom *', ru:'ФИО *', ar:'الاسم الكامل *' },
    form_dob: { it:'Data di nascita *', en:'Date of birth *', de:'Geburtsdatum *', fr:'Date de naissance *', ru:'Дата рождения *', ar:'تاريخ الميلاد *' },
    form_nationality: { it:'Nazionalita *', en:'Nationality *', de:'Nationalität *', fr:'Nationalité *', ru:'Гражданство *', ar:'الجنسية *' },
    form_address: { it:'Indirizzo *', en:'Address *', de:'Adresse *', fr:'Adresse *', ru:'Адрес *', ar:'العنوان *' },
    form_phone: { it:'Telefono *', en:'Phone *', de:'Telefon *', fr:'Téléphone *', ru:'Телефон *', ar:'الهاتف *' },
    form_email: { it:'Email *', en:'Email *', de:'E-Mail *', fr:'E-mail *', ru:'Эл. почта *', ar:'البريد الإلكتروني *' },
    form_doc: { it:'Documento identita (tipo/numero/scadenza) *', en:'ID document (type/number/expiry) *', de:'Ausweis (Typ/Nummer/Ablauf) *', fr:'Pièce d\'identité (type/numéro/expiration) *', ru:'Удостоверение личности (тип/номер/срок) *', ar:'وثيقة الهوية (نوع/رقم/انتهاء) *' },
    form_license: { it:'Patente (categoria/numero/scadenza) *', en:'Driving license (category/number/expiry) *', de:'Führerschein (Kategorie/Nummer/Ablauf) *', fr:'Permis de conduire (catégorie/numéro/expiration) *', ru:'Водительское удостоверение (кат./номер/срок) *', ar:'رخصة القيادة (فئة/رقم/انتهاء) *' },
    upload_info_docs: { it:'Allega foto dei documenti. Verranno inviate separatamente via WhatsApp.', en:'Attach photos of your documents. They will be sent separately via WhatsApp.', de:'Fotos Ihrer Dokumente anhängen. Diese werden separat per WhatsApp gesendet.', fr:'Joignez les photos de vos documents. Ils seront envoyés séparément par WhatsApp.', ru:'Прикрепите фото документов. Они будут отправлены отдельно через WhatsApp.', ar:'أرفق صور المستندات. سيتم إرسالها بشكل منفصل عبر واتساب.' },
    upload_id: { it:'Documento d\'identita', en:'ID document', de:'Ausweis', fr:'Pièce d\'identité', ru:'Удостоверение', ar:'وثيقة الهوية' },
    upload_front_back: { it:'Fronte e retro', en:'Front and back', de:'Vorder- und Rückseite', fr:'Recto et verso', ru:'Лицевая и обратная сторона', ar:'الأمام والخلف' },
    upload_license: { it:'Patente di guida', en:'Driving license', de:'Führerschein', fr:'Permis de conduire', ru:'Водительские права', ar:'رخصة القيادة' },
    form_notes: { it:'Note aggiuntive', en:'Additional notes', de:'Zusätzliche Anmerkungen', fr:'Notes supplémentaires', ru:'Дополнительные заметки', ar:'ملاحظات إضافية' },
    btn_send_booking: { it:'Invia prenotazione su WhatsApp', en:'Send booking via WhatsApp', de:'Buchung per WhatsApp senden', fr:'Envoyer la réservation par WhatsApp', ru:'Отправить бронирование через WhatsApp', ar:'أرسل الحجز عبر واتساب' },
    booking_disclaimer: { it:'La prenotazione verra confermata via WhatsApp. Deposito cauzionale e firma contratto al ritiro.', en:'Booking will be confirmed via WhatsApp. Security deposit and contract signature at pickup.', de:'Buchung wird per WhatsApp bestätigt. Kaution und Vertragsunterschrift bei Abholung.', fr:'La réservation sera confirmée par WhatsApp. Caution et signature du contrat au retrait.', ru:'Бронирование будет подтверждено через WhatsApp. Залог и подпись контракта при получении.', ar:'سيتم تأكيد الحجز عبر واتساب. تأمين وتوقيع العقد عند الاستلام.' },

    // ===== TRASPORTO FORM =====
    trans_tag: { it:'Richiedi preventivo', en:'Request a quote', de:'Angebot anfordern', fr:'Demander un devis', ru:'Запросить расчет', ar:'اطلب عرض سعر' },
    trans_title: { it:'Trasporto, Consegna o Pratiche', en:'Transport, Delivery or Paperwork', de:'Transport, Lieferung oder Formalitäten', fr:'Transport, Livraison ou Formalités', ru:'Перевозка, доставка или документы', ar:'نقل، توصيل أو أوراق' },
    trans_subtitle: { it:'Compila il modulo e ricevi un preventivo su WhatsApp', en:'Fill out the form and receive a quote via WhatsApp', de:'Füllen Sie das Formular aus und erhalten Sie ein Angebot per WhatsApp', fr:'Remplissez le formulaire et recevez un devis par WhatsApp', ru:'Заполните форму и получите расчет через WhatsApp', ar:'املأ النموذج واحصل على عرض سعر عبر واتساب' },
    trans_step1: { it:'Tipo di servizio', en:'Service type', de:'Dienstleistungsart', fr:'Type de service', ru:'Тип услуги', ar:'نوع الخدمة' },
    trans_opt_transport: { it:'Trasporto veicolo', en:'Vehicle transport', de:'Fahrzeugtransport', fr:'Transport de véhicule', ru:'Перевозка транспорта', ar:'نقل مركبة' },
    trans_opt_delivery: { it:'Consegna veicolo', en:'Vehicle delivery', de:'Fahrzeuglieferung', fr:'Livraison de véhicule', ru:'Доставка транспорта', ar:'توصيل مركبة' },
    trans_opt_customs: { it:'Pratiche doganali', en:'Customs procedures', de:'Zollformalitäten', fr:'Formalités douanières', ru:'Таможенные процедуры', ar:'إجراءات جمركية' },
    trans_opt_paperwork: { it:'Pratiche auto/moto', en:'Vehicle paperwork', de:'Fahrzeugformalitäten', fr:'Formalités auto/moto', ru:'Документы на транспорт', ar:'أوراق المركبات' },
    trans_step2: { it:'Dettagli', en:'Details', de:'Details', fr:'Détails', ru:'Детали', ar:'التفاصيل' },
    form_vehicle_type: { it:'Tipo veicolo *', en:'Vehicle type *', de:'Fahrzeugtyp *', fr:'Type de véhicule *', ru:'Тип транспорта *', ar:'نوع المركبة *' },
    form_brand: { it:'Marca e modello *', en:'Make and model *', de:'Marke und Modell *', fr:'Marque et modèle *', ru:'Марка и модель *', ar:'الماركة والطراز *' },
    form_plate: { it:'Targa', en:'Plate', de:'Kennzeichen', fr:'Plaque', ru:'Номерной знак', ar:'لوحة' },
    form_condition: { it:'Condizioni *', en:'Condition *', de:'Zustand *', fr:'État *', ru:'Состояние *', ar:'الحالة *' },
    form_condition_running: { it:'Marciante (funzionante)', en:'Running (functional)', de:'Fahrtüchtig (funktionsfähig)', fr:'Roulant (fonctionnel)', ru:'На ходу (рабочее)', ar:'يعمل (وظيفي)' },
    form_condition_not: { it:'Non marciante', en:'Not running', de:'Nicht fahrtüchtig', fr:'Non roulant', ru:'Не на ходу', ar:'لا يعمل' },
    form_condition_damaged: { it:'Incidentato', en:'Damaged', de:'Beschädigt', fr:'Accidenté', ru:'Поврежденное', ar:'متضرر' },
    form_condition_new: { it:'Nuovo / da concessionario', en:'New / from dealer', de:'Neu / vom Händler', fr:'Neuf / du concessionnaire', ru:'Новое / от дилера', ar:'جديد / من الوكيل' },
    form_pickup_addr: { it:'Indirizzo di ritiro *', en:'Pickup address *', de:'Abholadresse *', fr:'Adresse de retrait *', ru:'Адрес получения *', ar:'عنوان الاستلام *' },
    form_delivery_addr: { it:'Indirizzo di consegna *', en:'Delivery address *', de:'Lieferadresse *', fr:'Adresse de livraison *', ru:'Адрес доставки *', ar:'عنوان التسليم *' },
    form_date: { it:'Data preferita', en:'Preferred date', de:'Wunschdatum', fr:'Date souhaitée', ru:'Желаемая дата', ar:'التاريخ المفضل' },
    form_urgency: { it:'Urgenza', en:'Urgency', de:'Dringlichkeit', fr:'Urgence', ru:'Срочность', ar:'الاستعجال' },
    form_urgency_normal: { it:'Normale (entro 1 settimana)', en:'Normal (within 1 week)', de:'Normal (innerhalb 1 Woche)', fr:'Normal (sous 1 semaine)', ru:'Обычная (в течение 1 недели)', ar:'عادي (خلال أسبوع)' },
    form_urgency_urgent: { it:'Urgente (entro 2-3 giorni)', en:'Urgent (within 2-3 days)', de:'Dringend (innerhalb 2-3 Tagen)', fr:'Urgent (sous 2-3 jours)', ru:'Срочная (2-3 дня)', ar:'عاجل (خلال 2-3 أيام)' },
    form_urgency_express: { it:'Express (entro 24h)', en:'Express (within 24h)', de:'Express (innerhalb 24h)', fr:'Express (sous 24h)', ru:'Экспресс (в течение 24ч)', ar:'سريع (خلال 24 ساعة)' },
    trans_step3: { it:'Foto, documenti e contatto', en:'Photos, documents & contact', de:'Fotos, Dokumente & Kontakt', fr:'Photos, documents & contact', ru:'Фото, документы и контакт', ar:'صور، مستندات واتصال' },
    upload_info_vehicle: { it:'Allega foto del veicolo e documenti necessari. Verranno inviati via WhatsApp.', en:'Attach vehicle photos and necessary documents. They will be sent via WhatsApp.', de:'Fahrzeugfotos und erforderliche Dokumente anhängen. Diese werden per WhatsApp gesendet.', fr:'Joignez les photos du véhicule et les documents nécessaires. Ils seront envoyés par WhatsApp.', ru:'Прикрепите фото транспорта и необходимые документы. Они будут отправлены через WhatsApp.', ar:'أرفق صور المركبة والمستندات اللازمة. سيتم إرسالها عبر واتساب.' },
    upload_vehicle: { it:'Foto veicolo', en:'Vehicle photos', de:'Fahrzeugfotos', fr:'Photos véhicule', ru:'Фото транспорта', ar:'صور المركبة' },
    upload_documents: { it:'Documenti', en:'Documents', de:'Dokumente', fr:'Documents', ru:'Документы', ar:'المستندات' },
    upload_other: { it:'Altro', en:'Other', de:'Andere', fr:'Autre', ru:'Другое', ar:'أخرى' },
    btn_send_request: { it:'Invia richiesta su WhatsApp', en:'Send request via WhatsApp', de:'Anfrage per WhatsApp senden', fr:'Envoyer la demande par WhatsApp', ru:'Отправить запрос через WhatsApp', ar:'أرسل الطلب عبر واتساب' },
    trans_disclaimer: { it:'Riceverai un preventivo personalizzato via WhatsApp.', en:'You will receive a personalized quote via WhatsApp.', de:'Sie erhalten ein individuelles Angebot per WhatsApp.', fr:'Vous recevrez un devis personnalisé par WhatsApp.', ru:'Вы получите индивидуальный расчет через WhatsApp.', ar:'ستتلقى عرض سعر مخصص عبر واتساب.' },

    // ===== BANNER =====
    banner_title: { it:'Il tuo veicolo merita il meglio.', en:'Your vehicle deserves the best.', de:'Ihr Fahrzeug verdient das Beste.', fr:'Votre véhicule mérite le meilleur.', ru:'Ваш транспорт заслуживает лучшего.', ar:'مركبتك تستحق الأفضل.' },
    banner_desc: { it:'Supercar, auto d\'epoca, veicoli commerciali. Ogni trasporto e gestito con cura e professionalita. Assicurato, puntuale, garantito.', en:'Supercars, classic cars, commercial vehicles. Every transport is handled with care and professionalism. Insured, punctual, guaranteed.', de:'Supersportwagen, Oldtimer, Nutzfahrzeuge. Jeder Transport wird mit Sorgfalt und Professionalität durchgeführt. Versichert, pünktlich, garantiert.', fr:'Supercars, voitures classiques, véhicules utilitaires. Chaque transport est géré avec soin et professionnalisme. Assuré, ponctuel, garanti.', ru:'Суперкары, классика, коммерческий транспорт. Каждая перевозка — с заботой и профессионализмом. Застраховано, пунктуально, гарантировано.', ar:'سيارات خارقة، سيارات كلاسيكية، مركبات تجارية. كل عملية نقل تتم بعناية واحترافية. مؤمنة، دقيقة، مضمونة.' },
    banner_btn: { it:'Richiedi preventivo', en:'Request a quote', de:'Angebot anfordern', fr:'Demander un devis', ru:'Запросить расчет', ar:'اطلب عرض سعر' },

    // ===== GALLERY =====
    gallery_tag: { it:'Gallery', en:'Gallery', de:'Galerie', fr:'Galerie', ru:'Галерея', ar:'معرض' },
    gallery_title: { it:'I nostri trasporti', en:'Our transports', de:'Unsere Transporte', fr:'Nos transports', ru:'Наши перевозки', ar:'عمليات النقل لدينا' },

    // ===== CONTATTI =====
    contact_tag: { it:'Contatti', en:'Contact', de:'Kontakt', fr:'Contact', ru:'Контакты', ar:'اتصل بنا' },
    contact_title: { it:'Dove trovarci', en:'Where to find us', de:'Wo Sie uns finden', fr:'Où nous trouver', ru:'Где нас найти', ar:'أين تجدنا' },
    contact_sede: { it:'Sede', en:'Office', de:'Sitz', fr:'Siège', ru:'Офис', ar:'المكتب' },
    contact_phone: { it:'Telefono', en:'Phone', de:'Telefon', fr:'Téléphone', ru:'Телефон', ar:'الهاتف' },
    contact_hours: { it:'Orari', en:'Hours', de:'Öffnungszeiten', fr:'Horaires', ru:'Часы работы', ar:'ساعات العمل' },
    contact_hours_val: { it:'Lun - Ven: 08:00 - 18:00<br>Sab: 09:00 - 12:00', en:'Mon - Fri: 08:00 - 18:00<br>Sat: 09:00 - 12:00', de:'Mo - Fr: 08:00 - 18:00<br>Sa: 09:00 - 12:00', fr:'Lun - Ven: 08:00 - 18:00<br>Sam: 09:00 - 12:00', ru:'Пн - Пт: 08:00 - 18:00<br>Сб: 09:00 - 12:00', ar:'الإثنين - الجمعة: 08:00 - 18:00<br>السبت: 09:00 - 12:00' },

    // ===== FOOTER =====
    footer_rights: { it:'Tutti i diritti riservati.', en:'All rights reserved.', de:'Alle Rechte vorbehalten.', fr:'Tous droits réservés.', ru:'Все права защищены.', ar:'جميع الحقوق محفوظة.' },
};

// Day/month names per language
const CALENDAR_I18N = {
    it: { days:['Lun','Mar','Mer','Gio','Ven','Sab','Dom'], months:['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'] },
    en: { days:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'], months:['January','February','March','April','May','June','July','August','September','October','November','December'] },
    de: { days:['Mo','Di','Mi','Do','Fr','Sa','So'], months:['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'] },
    fr: { days:['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'], months:['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'] },
    ru: { days:['Пн','Вт','Ср','Чт','Пт','Сб','Вс'], months:['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'] },
    ar: { days:['إث','ثل','أر','خم','جم','سب','أح'], months:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'] },
};

// Detect language: URL param > localStorage > default
function detectLang() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang && ['it','en','de','fr','ru','ar'].includes(urlLang)) return urlLang;
    return localStorage.getItem('tt_lang') || 'it';
}
let currentLang = detectLang();

function t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[currentLang] || entry['it'] || key;
}

// PUNTO A: sostituzione (NON appendChild) di canonical, og:url, og:locale.
// Invocata solo sulla homepage (l'unica pagina con varianti linguistiche reali).
function updateSEOTags(lang) {
    const path = window.location.pathname;
    const isHomepage = path === '/' || path === '/index.html';
    if (!isHomepage) return;

    const origin = 'https://ticinotransport.ch';
    const hasLangParam = new URLSearchParams(window.location.search).has('lang');
    const canonicalURL = hasLangParam ? `${origin}/?lang=${lang}` : `${origin}/`;

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = canonicalURL;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalURL);

    const localeMap = { it:'it_CH', en:'en_GB', de:'de_CH', fr:'fr_CH', ru:'ru_RU', ar:'ar_SA' };
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', localeMap[lang] || 'it_CH');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tt_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    updateSEOTags(lang);

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (el.tagName === 'INPUT' && el.type !== 'radio' && el.type !== 'checkbox') {
            // don't change input values
        } else {
            el.innerHTML = val;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });

    // Update calendar day headers
    const calI18n = CALENDAR_I18N[lang] || CALENDAR_I18N['it'];
    document.querySelectorAll('.cal-header').forEach((el, i) => {
        el.textContent = calI18n.days[i];
    });

    // Update language dropdown
    const langSelect = document.getElementById('langSelect');
    if (langSelect) langSelect.value = lang;

    // Re-render calendar if BookingSystem exists
    if (window.BookingSystemRerender) window.BookingSystemRerender();
}

// Init on load
document.addEventListener('DOMContentLoaded', () => {
    // Language dropdown
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
        langSelect.value = currentLang;
    }
    // Apply saved language (full re-render) OR update only SEO tags if IT (DOM already in IT)
    if (currentLang !== 'it') {
        setLanguage(currentLang);
    } else {
        updateSEOTags('it');
    }
});
