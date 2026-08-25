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

    // ===== FAQ =====
    faq_tag: { it:'FAQ', en:'FAQ', de:'FAQ', fr:'FAQ', ru:'FAQ', ar:'الأسئلة الشائعة' },
    faq_title: { it:'Domande frequenti', en:'Frequently asked questions', de:'Häufig gestellte Fragen', fr:'Questions fréquentes', ru:'Часто задаваемые вопросы', ar:'الأسئلة الشائعة' },

    faq_q1: { it:'Quanto costa noleggiare un furgone per trasloco in Ticino?', en:'How much does it cost to rent a van for moving in Ticino?', de:'Wie viel kostet die Anmietung eines Transporters für einen Umzug im Tessin?', fr:'Combien coûte la location d\'un fourgon pour un déménagement au Tessin ?', ru:'Сколько стоит аренда фургона для переезда в Тичино?', ar:'كم تكلفة استئجار شاحنة للنقل في تيتشينو؟' },
    faq_a1: { it:'Il noleggio furgone per trasloco parte da <strong>CHF 80.-/giorno</strong> per il Citroen Jumpy L1H1 (5 m3, portata 1\'000 kg) e <strong>CHF 120.-/giorno</strong> per il Fiat Ducato L2H2 (13 m3, portata 1\'500 kg). Prenotazione online con calendario disponibilita e conferma immediata via WhatsApp. Servizio attivo a Lugano, Mendrisio, Bellinzona, Locarno e in tutto il Ticino.', en:'Van rental for moving starts from <strong>CHF 80.-/day</strong> for the Citroen Jumpy L1H1 (5 m³, 1,000 kg payload) and <strong>CHF 120.-/day</strong> for the Fiat Ducato L2H2 (13 m³, 1,500 kg payload). Online booking with availability calendar and instant WhatsApp confirmation. Service active in Lugano, Mendrisio, Bellinzona, Locarno and throughout Ticino.', de:'Die Transportermiete für Umzüge beginnt bei <strong>CHF 80.-/Tag</strong> für den Citroen Jumpy L1H1 (5 m³, 1.000 kg Nutzlast) und <strong>CHF 120.-/Tag</strong> für den Fiat Ducato L2H2 (13 m³, 1.500 kg Nutzlast). Online-Buchung mit Verfügbarkeitskalender und sofortiger WhatsApp-Bestätigung. Service in Lugano, Mendrisio, Bellinzona, Locarno und im gesamten Tessin.', fr:'La location d\'un fourgon pour déménagement démarre à <strong>CHF 80.-/jour</strong> pour le Citroen Jumpy L1H1 (5 m³, charge utile 1\'000 kg) et <strong>CHF 120.-/jour</strong> pour le Fiat Ducato L2H2 (13 m³, charge 1\'500 kg). Réservation en ligne avec calendrier de disponibilité et confirmation immédiate par WhatsApp. Service actif à Lugano, Mendrisio, Bellinzona, Locarno et dans tout le Tessin.', ru:'Аренда фургона для переезда — от <strong>CHF 80.-/день</strong> за Citroen Jumpy L1H1 (5 м³, грузоподъёмность 1000 кг) и <strong>CHF 120.-/день</strong> за Fiat Ducato L2H2 (13 м³, 1500 кг). Онлайн-бронирование с календарём доступности и мгновенным подтверждением через WhatsApp. Сервис активен в Лугано, Мендризио, Беллинцоне, Локарно и по всему Тичино.', ar:'يبدأ تأجير الشاحنات للنقل من <strong>80 فرنكاً سويسرياً/يوم</strong> لسيارة Citroen Jumpy L1H1 (5 م³، حمولة 1000 كجم) و<strong>120 فرنكاً/يوم</strong> لسيارة Fiat Ducato L2H2 (13 م³، حمولة 1500 كجم). الحجز عبر الإنترنت مع تقويم التوفر وتأكيد فوري عبر واتساب. الخدمة متاحة في لوغانو، مندريزيو، بيلينزونا، لوكارنو وفي جميع أنحاء تيتشينو.' },

    faq_q2: { it:'Come funziona il trasporto auto in Svizzera?', en:'How does car transport work in Switzerland?', de:'Wie funktioniert der Autotransport in der Schweiz?', fr:'Comment fonctionne le transport automobile en Suisse ?', ru:'Как работает перевозка автомобилей по Швейцарии?', ar:'كيف يعمل نقل السيارات في سويسرا؟' },
    faq_a2: { it:'TicinoTransport offre <strong>trasporto e consegna auto porta a porta</strong> in tutta la Svizzera e in Europa. Ritiriamo il veicolo all\'indirizzo indicato e lo consegniamo a destinazione. Il servizio e completamente assicurato e disponibile anche per supercar, auto d\'epoca e veicoli da concessionario. <strong>Consegne veloci entro 24 ore</strong> disponibili su richiesta.', en:'TicinoTransport offers <strong>door-to-door car transport and delivery</strong> throughout Switzerland and Europe. We pick up the vehicle at the indicated address and deliver it to its destination. The service is fully insured and also available for supercars, classic cars and dealer vehicles. <strong>Fast deliveries within 24 hours</strong> available on request.', de:'TicinoTransport bietet <strong>Tür-zu-Tür Autotransport und Lieferung</strong> in der ganzen Schweiz und in Europa. Wir holen das Fahrzeug an der angegebenen Adresse ab und liefern es ans Ziel. Der Service ist voll versichert und auch für Supersportwagen, Oldtimer und Händlerfahrzeuge verfügbar. <strong>Schnelle Lieferungen innerhalb von 24 Stunden</strong> auf Anfrage.', fr:'TicinoTransport propose le <strong>transport et la livraison de voitures porte-à-porte</strong> dans toute la Suisse et l\'Europe. Nous récupérons le véhicule à l\'adresse indiquée et le livrons à destination. Le service est entièrement assuré et disponible aussi pour supercars, voitures anciennes et véhicules de concessionnaire. <strong>Livraisons rapides sous 24 heures</strong> disponibles sur demande.', ru:'TicinoTransport предлагает <strong>перевозку и доставку автомобилей от двери до двери</strong> по всей Швейцарии и Европе. Мы забираем транспорт по указанному адресу и доставляем по назначению. Сервис полностью застрахован и подходит для суперкаров, классических автомобилей и дилерских машин. <strong>Быстрая доставка в течение 24 часов</strong> по запросу.', ar:'تقدم TicinoTransport <strong>نقل وتوصيل السيارات من الباب إلى الباب</strong> في جميع أنحاء سويسرا وأوروبا. نستلم المركبة من العنوان المحدد ونوصلها إلى الوجهة. الخدمة مؤمنة بالكامل ومتاحة أيضاً للسيارات الفاخرة والكلاسيكية ومركبات الوكلاء. <strong>توصيل سريع خلال 24 ساعة</strong> متاح عند الطلب.' },

    faq_q3: { it:'Offrite servizio di autosoccorso stradale in Ticino?', en:'Do you offer roadside assistance in Ticino?', de:'Bieten Sie Pannenhilfe im Tessin an?', fr:'Proposez-vous un service de dépannage routier au Tessin ?', ru:'Вы предлагаете дорожную помощь в Тичино?', ar:'هل تقدمون خدمة المساعدة على الطريق في تيتشينو؟' },
    faq_a3: { it:'Si, offriamo <strong>autosoccorso stradale</strong> e recupero veicoli in panne, incidentati o non marcianti in Ticino e Svizzera. Utilizziamo carrello autoveicoli professionale per il trasporto sicuro. Interventi rapidi per privati, assicurazioni e servizio di soccorso stradale.', en:'Yes, we offer <strong>roadside assistance</strong> and recovery of broken-down, crashed or non-running vehicles in Ticino and Switzerland. We use a professional vehicle trailer for safe transport. Fast interventions for private clients, insurance companies and roadside assistance services.', de:'Ja, wir bieten <strong>Pannenhilfe</strong> und Bergung von liegengebliebenen, verunfallten oder nicht fahrbereiten Fahrzeugen im Tessin und in der Schweiz. Wir nutzen einen professionellen Fahrzeuganhänger für den sicheren Transport. Schnelle Einsätze für Privatkunden, Versicherungen und Pannendienste.', fr:'Oui, nous proposons un <strong>service de dépannage routier</strong> et le recouvrement de véhicules en panne, accidentés ou immobilisés au Tessin et en Suisse. Nous utilisons une remorque professionnelle pour un transport sécurisé. Interventions rapides pour particuliers, assurances et services de dépannage.', ru:'Да, мы предлагаем <strong>дорожную помощь</strong> и эвакуацию неисправных, повреждённых или неработающих автомобилей в Тичино и Швейцарии. Используем профессиональный прицеп для безопасной перевозки. Быстрое реагирование для частных лиц, страховых компаний и служб эвакуации.', ar:'نعم، نقدم <strong>المساعدة على الطريق</strong> واستعادة المركبات المعطلة أو المتضررة أو غير العاملة في تيتشينو وسويسرا. نستخدم مقطورة احترافية لنقل المركبات بأمان. تدخلات سريعة للأفراد وشركات التأمين وخدمات المساعدة على الطريق.' },

    faq_q4: { it:'Gestite le pratiche doganali per importazione auto dalla Germania o Italia?', en:'Do you handle customs paperwork for car imports from Germany or Italy?', de:'Übernehmen Sie die Zollformalitäten für Autoimporte aus Deutschland oder Italien?', fr:'Gérez-vous les formalités douanières pour l\'importation de voitures depuis l\'Allemagne ou l\'Italie ?', ru:'Занимаетесь ли вы таможенным оформлением при импорте автомобилей из Германии или Италии?', ar:'هل تتولون الإجراءات الجمركية لاستيراد السيارات من ألمانيا أو إيطاليا؟' },
    faq_a4: { it:'Si, gestiamo tutte le <strong>pratiche doganali</strong> per importazione ed esportazione veicoli tra Svizzera, Italia, Germania, Francia e Austria: sdoganamento, immatricolazione svizzera, targhe provvisorie e definitive, cambio di proprieta, collaudo. Servizio completo per privati e <strong>concessionari auto</strong>.', en:'Yes, we handle all <strong>customs procedures</strong> for vehicle import and export between Switzerland, Italy, Germany, France and Austria: customs clearance, Swiss registration, temporary and final plates, ownership transfer, technical inspection. Complete service for private clients and <strong>car dealers</strong>.', de:'Ja, wir übernehmen alle <strong>Zollformalitäten</strong> für Fahrzeugimport und -export zwischen Schweiz, Italien, Deutschland, Frankreich und Österreich: Verzollung, Schweizer Zulassung, Wechsel- und Definitivkennzeichen, Halterwechsel, MFK-Prüfung. Komplettservice für Privatkunden und <strong>Autohändler</strong>.', fr:'Oui, nous gérons toutes les <strong>formalités douanières</strong> pour l\'importation et l\'exportation de véhicules entre la Suisse, l\'Italie, l\'Allemagne, la France et l\'Autriche : dédouanement, immatriculation suisse, plaques provisoires et définitives, transfert de propriété, expertise. Service complet pour particuliers et <strong>concessionnaires automobiles</strong>.', ru:'Да, мы выполняем все <strong>таможенные процедуры</strong> для импорта и экспорта транспортных средств между Швейцарией, Италией, Германией, Францией и Австрией: растаможка, регистрация в Швейцарии, временные и постоянные номера, перерегистрация, технический осмотр. Полный сервис для частных лиц и <strong>автодилеров</strong>.', ar:'نعم، نتولى جميع <strong>الإجراءات الجمركية</strong> لاستيراد وتصدير المركبات بين سويسرا وإيطاليا وألمانيا وفرنسا والنمسا: التخليص الجمركي، التسجيل السويسري، اللوحات المؤقتة والنهائية، نقل الملكية، الفحص الفني. خدمة شاملة للأفراد و<strong>وكلاء السيارات</strong>.' },

    faq_q5: { it:'Siete un\'alternativa a Galliker per il trasporto veicoli?', en:'Are you an alternative to Galliker for vehicle transport?', de:'Sind Sie eine Alternative zu Galliker für den Fahrzeugtransport?', fr:'Êtes-vous une alternative à Galliker pour le transport de véhicules ?', ru:'Вы — альтернатива компании Galliker по перевозке транспорта?', ar:'هل أنتم بديل لشركة Galliker لنقل المركبات؟' },
    faq_a5: { it:'Si, TicinoTransport e un\'<strong>alternativa flessibile a Galliker</strong> per il trasporto di singoli veicoli. Offriamo un servizio personalizzato, porta a porta, con tempi rapidi e preventivi gratuiti. Ideale per privati, concessionari auto, officine e garage che necessitano di un servizio su misura.', en:'Yes, TicinoTransport is a <strong>flexible alternative to Galliker</strong> for the transport of individual vehicles. We offer a personalised, door-to-door service with fast turnaround and free quotes. Ideal for private clients, car dealers, workshops and garages that need a tailored service.', de:'Ja, TicinoTransport ist eine <strong>flexible Alternative zu Galliker</strong> für den Transport einzelner Fahrzeuge. Wir bieten einen personalisierten Tür-zu-Tür-Service mit schnellen Abläufen und kostenlosen Angeboten. Ideal für Privatkunden, Autohändler, Werkstätten und Garagen, die einen massgeschneiderten Service benötigen.', fr:'Oui, TicinoTransport est une <strong>alternative flexible à Galliker</strong> pour le transport de véhicules individuels. Nous offrons un service personnalisé, porte-à-porte, avec des délais rapides et des devis gratuits. Idéal pour particuliers, concessionnaires, ateliers et garages qui ont besoin d\'un service sur mesure.', ru:'Да, TicinoTransport — это <strong>гибкая альтернатива Galliker</strong> для перевозки отдельных автомобилей. Мы предлагаем индивидуальный сервис от двери до двери с быстрыми сроками и бесплатными расчётами. Идеально подходит для частных лиц, автодилеров, мастерских и гаражей, которым нужен индивидуальный подход.', ar:'نعم، TicinoTransport هي <strong>بديل مرن لشركة Galliker</strong> لنقل المركبات الفردية. نقدم خدمة مخصصة من الباب إلى الباب مع أوقات سريعة وعروض أسعار مجانية. مثالية للأفراد ووكلاء السيارات والورش والكراجات التي تحتاج خدمة مفصلة.' },

    faq_q6: { it:'Posso noleggiare un furgone per trasportare una moto?', en:'Can I rent a van to transport a motorcycle?', de:'Kann ich einen Transporter mieten, um ein Motorrad zu transportieren?', fr:'Puis-je louer un fourgon pour transporter une moto ?', ru:'Можно ли арендовать фургон для перевозки мотоцикла?', ar:'هل يمكنني استئجار شاحنة لنقل دراجة نارية؟' },
    faq_a6: { it:'Si, i nostri furgoni sono ideali per il <strong>trasporto moto</strong>. Il Citroen Jumpy e perfetto per una moto, il Fiat Ducato puo trasportare fino a 2-3 moto. Offriamo anche <strong>noleggio carrello autoveicoli</strong> per il trasporto di auto e moto su rimorchio.', en:'Yes, our vans are ideal for <strong>motorcycle transport</strong>. The Citroen Jumpy is perfect for one bike, the Fiat Ducato can carry up to 2-3 motorcycles. We also offer <strong>vehicle trailer rental</strong> for transporting cars and motorcycles on a trailer.', de:'Ja, unsere Transporter sind ideal für den <strong>Motorradtransport</strong>. Der Citroen Jumpy eignet sich für ein Motorrad, der Fiat Ducato kann bis zu 2-3 Motorräder transportieren. Wir bieten auch <strong>Fahrzeuganhänger zum Mieten</strong> für den Transport von Autos und Motorrädern auf Anhänger.', fr:'Oui, nos fourgons sont idéaux pour le <strong>transport de motos</strong>. Le Citroen Jumpy est parfait pour une moto, le Fiat Ducato peut en transporter 2 à 3. Nous proposons aussi la <strong>location de remorque porte-véhicules</strong> pour le transport d\'autos et motos sur remorque.', ru:'Да, наши фургоны идеально подходят для <strong>перевозки мотоциклов</strong>. Citroen Jumpy подходит для одного мотоцикла, Fiat Ducato может перевезти 2-3 мотоцикла. Также предлагаем <strong>аренду автоприцепа</strong> для перевозки автомобилей и мотоциклов на прицепе.', ar:'نعم، شاحناتنا مثالية لـ<strong>نقل الدراجات النارية</strong>. سيارة Citroen Jumpy مثالية لدراجة واحدة، بينما Fiat Ducato تستوعب حتى 2-3 دراجات. نقدم أيضاً <strong>تأجير مقطورة المركبات</strong> لنقل السيارات والدراجات على المقطورة.' },

    faq_q7: { it:'Dove si trova TicinoTransport?', en:'Where is TicinoTransport located?', de:'Wo befindet sich TicinoTransport?', fr:'Où se trouve TicinoTransport ?', ru:'Где находится TicinoTransport?', ar:'أين يقع TicinoTransport؟' },
    faq_a7: { it:'TicinoTransport ha sede a <strong>Bioggio, nel Canton Ticino</strong> (Svizzera), a pochi minuti da Lugano. Operiamo in tutto il Ticino (Lugano, Mendrisio, Bellinzona, Locarno) e in tutta la Svizzera, con servizi anche verso Italia, Germania, Francia e Austria.', en:'TicinoTransport is based in <strong>Bioggio, in the Canton of Ticino</strong> (Switzerland), just a few minutes from Lugano. We operate throughout Ticino (Lugano, Mendrisio, Bellinzona, Locarno) and across Switzerland, with services also to Italy, Germany, France and Austria.', de:'TicinoTransport hat seinen Sitz in <strong>Bioggio im Kanton Tessin</strong> (Schweiz), nur wenige Minuten von Lugano entfernt. Wir sind im gesamten Tessin (Lugano, Mendrisio, Bellinzona, Locarno) und in der ganzen Schweiz tätig, mit Dienstleistungen auch nach Italien, Deutschland, Frankreich und Österreich.', fr:'TicinoTransport a son siège à <strong>Bioggio, dans le canton du Tessin</strong> (Suisse), à quelques minutes de Lugano. Nous opérons dans tout le Tessin (Lugano, Mendrisio, Bellinzona, Locarno) et dans toute la Suisse, avec des services aussi vers l\'Italie, l\'Allemagne, la France et l\'Autriche.', ru:'TicinoTransport базируется в <strong>Биоджо, кантон Тичино</strong> (Швейцария), в нескольких минутах от Лугано. Мы работаем по всему Тичино (Лугано, Мендризио, Беллинцона, Локарно) и по всей Швейцарии, а также оказываем услуги в Италию, Германию, Францию и Австрию.', ar:'يقع مقر TicinoTransport في <strong>بيوجيو، كانتون تيتشينو</strong> (سويسرا)، على بُعد بضع دقائق من لوغانو. نعمل في جميع أنحاء تيتشينو (لوغانو، مندريزيو، بيلينزونا، لوكارنو) وفي سائر سويسرا، مع تقديم خدمات أيضاً إلى إيطاليا وألمانيا وفرنسا والنمسا.' },

    // ===== SEO CONTENT (footer-area blocks) =====
    seo_h2: { it:'Trasporto e Consegna Auto in Svizzera - TicinoTransport', en:'Car Transport and Delivery in Switzerland - TicinoTransport', de:'Autotransport und -lieferung in der Schweiz - TicinoTransport', fr:'Transport et livraison de voitures en Suisse - TicinoTransport', ru:'Перевозка и доставка автомобилей по Швейцарии - TicinoTransport', ar:'نقل وتوصيل السيارات في سويسرا - TicinoTransport' },

    seo_b1_title: { it:'Trasporto Veicoli e Consegne Veloci', en:'Vehicle Transport and Fast Deliveries', de:'Fahrzeugtransport und Schnelllieferungen', fr:'Transport de véhicules et livraisons rapides', ru:'Перевозка транспорта и быстрая доставка', ar:'نقل المركبات والتوصيل السريع' },
    seo_b1_text: { it:'TicinoTransport e il tuo partner per il <strong>trasporto e la consegna di auto, moto e veicoli commerciali</strong> in tutta la Svizzera e in Europa. Operiamo da Bioggio, nel cuore del Ticino, con un servizio <strong>porta a porta</strong> rapido e assicurato. Che si tratti di una supercar, un\'auto d\'epoca, un veicolo da concessionario o un mezzo incidentato, garantiamo <strong>consegne veloci</strong> e massima cura. Un\'alternativa flessibile e personalizzata rispetto ai grandi operatori come <strong>Galliker</strong>, pensata per privati, <strong>concessionari auto</strong>, officine e garage. <a href="trasporto-veicoli.html">Scopri di piu</a>', en:'TicinoTransport is your partner for <strong>transport and delivery of cars, motorcycles and commercial vehicles</strong> across Switzerland and Europe. We operate from Bioggio, in the heart of Ticino, with a fast and insured <strong>door-to-door</strong> service. Whether it is a supercar, classic car, dealer vehicle or crashed vehicle, we guarantee <strong>fast deliveries</strong> and maximum care. A flexible and personalised alternative to large operators like <strong>Galliker</strong>, designed for private clients, <strong>car dealers</strong>, workshops and garages. <a href="trasporto-veicoli.html">Learn more</a>', de:'TicinoTransport ist Ihr Partner für <strong>Transport und Lieferung von Autos, Motorrädern und Nutzfahrzeugen</strong> in der ganzen Schweiz und in Europa. Wir operieren von Bioggio im Herzen des Tessins mit einem schnellen und versicherten <strong>Tür-zu-Tür-Service</strong>. Ob Supersportwagen, Oldtimer, Händlerfahrzeug oder Unfallwagen — wir garantieren <strong>schnelle Lieferungen</strong> und höchste Sorgfalt. Eine flexible und personalisierte Alternative zu grossen Anbietern wie <strong>Galliker</strong>, gedacht für Privatkunden, <strong>Autohändler</strong>, Werkstätten und Garagen. <a href="trasporto-veicoli.html">Mehr erfahren</a>', fr:'TicinoTransport est votre partenaire pour le <strong>transport et la livraison de voitures, motos et véhicules utilitaires</strong> dans toute la Suisse et en Europe. Nous opérons depuis Bioggio, au cœur du Tessin, avec un service <strong>porte-à-porte</strong> rapide et assuré. Qu\'il s\'agisse d\'une supercar, d\'une voiture ancienne, d\'un véhicule de concessionnaire ou accidenté, nous garantissons des <strong>livraisons rapides</strong> et le plus grand soin. Une alternative flexible et personnalisée aux grands opérateurs comme <strong>Galliker</strong>, pensée pour particuliers, <strong>concessionnaires automobiles</strong>, ateliers et garages. <a href="trasporto-veicoli.html">En savoir plus</a>', ru:'TicinoTransport — ваш партнёр по <strong>перевозке и доставке автомобилей, мотоциклов и коммерческого транспорта</strong> по всей Швейцарии и Европе. Мы работаем из Биоджо, в самом сердце Тичино, предлагая быстрый и застрахованный сервис <strong>от двери до двери</strong>. Будь то суперкар, классический автомобиль, дилерская машина или повреждённый транспорт — мы гарантируем <strong>быструю доставку</strong> и максимальную заботу. Гибкая и индивидуальная альтернатива крупным операторам, таким как <strong>Galliker</strong>, для частных лиц, <strong>автодилеров</strong>, мастерских и гаражей. <a href="trasporto-veicoli.html">Узнать больше</a>', ar:'TicinoTransport هي شريكك لـ<strong>نقل وتوصيل السيارات والدراجات النارية والمركبات التجارية</strong> في جميع أنحاء سويسرا وأوروبا. نعمل من بيوجيو في قلب تيتشينو، بخدمة <strong>من الباب إلى الباب</strong> سريعة ومؤمنة. سواء كانت سيارة فاخرة، أو كلاسيكية، أو لوكيل سيارات، أو مركبة متضررة — نضمن <strong>توصيلاً سريعاً</strong> وأقصى درجات العناية. بديل مرن وشخصي للمشغلين الكبار مثل <strong>Galliker</strong>، مصمم للأفراد و<strong>وكلاء السيارات</strong> والورش والكراجات. <a href="trasporto-veicoli.html">اكتشف المزيد</a>' },

    seo_b2_title: { it:'Noleggio Furgoni per Traslochi e Trasporti', en:'Van Rental for Moving and Transport', de:'Transportervermietung für Umzüge und Transporte', fr:'Location de fourgons pour déménagements et transports', ru:'Аренда фургонов для переездов и перевозок', ar:'تأجير الشاحنات للنقل والترحيل' },
    seo_b2_text: { it:'Offriamo il <strong>noleggio furgoni per traslochi</strong> e trasporti a partire da CHF 80.-/giorno. Citroen Jumpy L1H1 (5 m3) e Fiat Ducato L2H2 (13 m3): ideali per traslochi, trasporto mobili, <strong><a href="trasporto-moto.html">trasporto moto</a></strong>, materiali e attrezzature. Disponibile anche il <strong>noleggio carrello autoveicoli</strong> per il trasporto di auto e moto. Prenotazione online con calendario disponibilita e conferma immediata via WhatsApp. Servizio attivo a Lugano, Mendrisio, Bellinzona, Locarno e in tutto il Ticino. <a href="noleggio-furgoni.html">Scopri di piu</a>', en:'We offer <strong>van rental for moving</strong> and transport from CHF 80.-/day. Citroen Jumpy L1H1 (5 m³) and Fiat Ducato L2H2 (13 m³): ideal for moving, furniture transport, <strong><a href="trasporto-moto.html">motorcycle transport</a></strong>, materials and equipment. <strong>Vehicle trailer rental</strong> also available for transporting cars and motorcycles. Online booking with availability calendar and instant WhatsApp confirmation. Service active in Lugano, Mendrisio, Bellinzona, Locarno and throughout Ticino. <a href="noleggio-furgoni.html">Learn more</a>', de:'Wir bieten <strong>Transportermiete für Umzüge</strong> und Transporte ab CHF 80.-/Tag. Citroen Jumpy L1H1 (5 m³) und Fiat Ducato L2H2 (13 m³): ideal für Umzüge, Möbeltransport, <strong><a href="trasporto-moto.html">Motorradtransport</a></strong>, Materialien und Ausrüstung. Auch <strong>Fahrzeuganhänger-Vermietung</strong> für den Transport von Autos und Motorrädern verfügbar. Online-Buchung mit Verfügbarkeitskalender und sofortiger WhatsApp-Bestätigung. Service in Lugano, Mendrisio, Bellinzona, Locarno und im gesamten Tessin. <a href="noleggio-furgoni.html">Mehr erfahren</a>', fr:'Nous proposons la <strong>location de fourgons pour déménagement</strong> et transport à partir de CHF 80.-/jour. Citroen Jumpy L1H1 (5 m³) et Fiat Ducato L2H2 (13 m³) : idéaux pour déménagements, transport de meubles, <strong><a href="trasporto-moto.html">transport de motos</a></strong>, matériaux et équipements. <strong>Location de remorque porte-véhicules</strong> également disponible pour le transport d\'autos et motos. Réservation en ligne avec calendrier de disponibilité et confirmation immédiate par WhatsApp. Service actif à Lugano, Mendrisio, Bellinzona, Locarno et dans tout le Tessin. <a href="noleggio-furgoni.html">En savoir plus</a>', ru:'Предлагаем <strong>аренду фургонов для переездов</strong> и перевозок от CHF 80.-/день. Citroen Jumpy L1H1 (5 м³) и Fiat Ducato L2H2 (13 м³): идеальны для переездов, перевозки мебели, <strong><a href="trasporto-moto.html">перевозки мотоциклов</a></strong>, материалов и оборудования. Также доступна <strong>аренда автоприцепа</strong> для перевозки автомобилей и мотоциклов. Онлайн-бронирование с календарём доступности и мгновенным подтверждением через WhatsApp. Сервис активен в Лугано, Мендризио, Беллинцоне, Локарно и по всему Тичино. <a href="noleggio-furgoni.html">Узнать больше</a>', ar:'نقدم <strong>تأجير الشاحنات للنقل</strong> والترحيل بدءاً من 80 فرنكاً سويسرياً/يوم. Citroen Jumpy L1H1 (5 م³) و Fiat Ducato L2H2 (13 م³): مثالية للنقل ونقل الأثاث و<strong><a href="trasporto-moto.html">نقل الدراجات النارية</a></strong> والمواد والمعدات. <strong>تأجير مقطورة المركبات</strong> متاح أيضاً لنقل السيارات والدراجات. الحجز عبر الإنترنت مع تقويم التوفر وتأكيد فوري عبر واتساب. الخدمة متاحة في لوغانو، مندريزيو، بيلينزونا، لوكارنو وفي جميع أنحاء تيتشينو. <a href="noleggio-furgoni.html">اكتشف المزيد</a>' },

    seo_b3_title: { it:'Pratiche Doganali e Immatricolazione', en:'Customs Procedures and Vehicle Registration', de:'Zollformalitäten und Fahrzeugzulassung', fr:'Formalités douanières et immatriculation', ru:'Таможенные процедуры и регистрация транспорта', ar:'الإجراءات الجمركية وتسجيل المركبات' },
    seo_b3_text: { it:'Gestiamo tutte le <strong>pratiche doganali</strong> per l\'importazione e l\'esportazione di veicoli tra Svizzera, Italia, Germania, Francia e Austria. Sdoganamento, <strong>immatricolazione svizzera</strong>, cambio di proprieta, targhe provvisorie e definitive, collaudo. Servizio completo per privati e <strong>concessionari auto</strong>. Ti seguiamo dalla A alla Z con competenza e rapidita. <a href="pratiche-doganali.html">Scopri di piu</a>', en:'We handle all <strong>customs procedures</strong> for vehicle import and export between Switzerland, Italy, Germany, France and Austria. Customs clearance, <strong>Swiss registration</strong>, ownership transfer, temporary and final plates, technical inspection. Complete service for private clients and <strong>car dealers</strong>. We support you from A to Z with expertise and speed. <a href="pratiche-doganali.html">Learn more</a>', de:'Wir übernehmen alle <strong>Zollformalitäten</strong> für den Import und Export von Fahrzeugen zwischen Schweiz, Italien, Deutschland, Frankreich und Österreich. Verzollung, <strong>Schweizer Zulassung</strong>, Halterwechsel, Wechsel- und Definitivkennzeichen, MFK-Prüfung. Komplettservice für Privatkunden und <strong>Autohändler</strong>. Wir begleiten Sie von A bis Z mit Kompetenz und Schnelligkeit. <a href="pratiche-doganali.html">Mehr erfahren</a>', fr:'Nous gérons toutes les <strong>formalités douanières</strong> pour l\'import et l\'export de véhicules entre la Suisse, l\'Italie, l\'Allemagne, la France et l\'Autriche. Dédouanement, <strong>immatriculation suisse</strong>, transfert de propriété, plaques provisoires et définitives, expertise. Service complet pour particuliers et <strong>concessionnaires automobiles</strong>. Nous vous accompagnons de A à Z avec compétence et rapidité. <a href="pratiche-doganali.html">En savoir plus</a>', ru:'Выполняем все <strong>таможенные процедуры</strong> для импорта и экспорта транспортных средств между Швейцарией, Италией, Германией, Францией и Австрией. Растаможка, <strong>швейцарская регистрация</strong>, перерегистрация, временные и постоянные номера, технический осмотр. Полный сервис для частных лиц и <strong>автодилеров</strong>. Мы сопровождаем вас от А до Я с компетентностью и быстротой. <a href="pratiche-doganali.html">Узнать больше</a>', ar:'نتولى جميع <strong>الإجراءات الجمركية</strong> لاستيراد وتصدير المركبات بين سويسرا وإيطاليا وألمانيا وفرنسا والنمسا. التخليص الجمركي، <strong>التسجيل السويسري</strong>، نقل الملكية، اللوحات المؤقتة والنهائية، الفحص الفني. خدمة شاملة للأفراد و<strong>وكلاء السيارات</strong>. نرافقك من الألف إلى الياء بكفاءة وسرعة. <a href="pratiche-doganali.html">اكتشف المزيد</a>' },

    seo_b4_title: { it:'Autosoccorso Stradale e Recupero Veicoli', en:'Roadside Assistance and Vehicle Recovery', de:'Pannenhilfe und Fahrzeugbergung', fr:'Dépannage routier et recouvrement de véhicules', ru:'Дорожная помощь и эвакуация транспорта', ar:'المساعدة على الطريق واستعادة المركبات' },
    seo_b4_text: { it:'Servizio di <strong>autosoccorso stradale</strong> e recupero veicoli in panne, incidentati o non marcianti in Ticino e Svizzera. Trasporto con <strong>carrello autoveicoli</strong> professionale. Interventi rapidi per privati, assicurazioni e soccorso stradale. Disponibili anche per <strong>consegne veloci</strong> urgenti entro 24 ore in tutta la Svizzera e nelle zone di confine. <a href="autosoccorso-stradale.html">Scopri di piu</a>', en:'<strong>Roadside assistance</strong> and recovery service for broken-down, crashed or non-running vehicles in Ticino and Switzerland. Transport with professional <strong>vehicle trailer</strong>. Fast interventions for private clients, insurance companies and roadside assistance services. Also available for urgent <strong>fast deliveries</strong> within 24 hours throughout Switzerland and border areas. <a href="autosoccorso-stradale.html">Learn more</a>', de:'<strong>Pannenhilfe</strong> und Bergungsdienst für liegengebliebene, verunfallte oder nicht fahrbereite Fahrzeuge im Tessin und in der Schweiz. Transport mit professionellem <strong>Fahrzeuganhänger</strong>. Schnelle Einsätze für Privatkunden, Versicherungen und Pannendienste. Auch für dringende <strong>Schnelllieferungen</strong> innerhalb von 24 Stunden in der ganzen Schweiz und in den Grenzgebieten verfügbar. <a href="autosoccorso-stradale.html">Mehr erfahren</a>', fr:'Service de <strong>dépannage routier</strong> et recouvrement de véhicules en panne, accidentés ou immobilisés au Tessin et en Suisse. Transport avec <strong>remorque porte-véhicules</strong> professionnelle. Interventions rapides pour particuliers, assurances et services de dépannage. Également disponibles pour <strong>livraisons rapides</strong> urgentes sous 24 heures dans toute la Suisse et dans les zones frontalières. <a href="autosoccorso-stradale.html">En savoir plus</a>', ru:'Сервис <strong>дорожной помощи</strong> и эвакуации неисправных, повреждённых или неработающих транспортных средств в Тичино и Швейцарии. Перевозка профессиональным <strong>автоприцепом</strong>. Быстрое реагирование для частных лиц, страховых компаний и служб эвакуации. Также доступны срочные <strong>быстрые доставки</strong> в течение 24 часов по всей Швейцарии и в приграничных районах. <a href="autosoccorso-stradale.html">Узнать больше</a>', ar:'خدمة <strong>المساعدة على الطريق</strong> واستعادة المركبات المعطلة أو المتضررة أو غير العاملة في تيتشينو وسويسرا. النقل بـ<strong>مقطورة مركبات</strong> احترافية. تدخلات سريعة للأفراد وشركات التأمين وخدمات المساعدة على الطريق. متاح أيضاً لـ<strong>التوصيل السريع</strong> العاجل خلال 24 ساعة في جميع أنحاء سويسرا والمناطق الحدودية. <a href="autosoccorso-stradale.html">اكتشف المزيد</a>' },
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
    if (urlLang && ['it','en','de','fr','ru','ar'].includes(urlLang)) {
        // Il parametro vale come scelta una tantum: la salviamo e poi lo togliamo
        // dall'URL (vedi stripLangParam).
        try { localStorage.setItem('tt_lang', urlLang); } catch (e) {}
        return urlLang;
    }
    return localStorage.getItem('tt_lang') || 'it';
}

// Toglie ?lang= dall'URL senza ricaricare.
// Il sito e' indicizzato in italiano e la lingua e' solo una preferenza UX lato
// client: ?lang=en serviva lo stesso contenuto italiano a un URL diverso, e
// Google ha finito per indicizzare autosoccorso-stradale.html?lang=en al posto
// dell'URL pulito. Il canonical resta la difesa principale; questo evita che il
// parametro continui a circolare ed essere condiviso.
function stripLangParam() {
    if (!window.history || !history.replaceState) return;
    const url = new URL(window.location.href);
    if (!url.searchParams.has('lang')) return;
    url.searchParams.delete('lang');
    const qs = url.searchParams.toString();
    history.replaceState(null, '', url.pathname + (qs ? '?' + qs : '') + url.hash);
}
let currentLang = detectLang();

function t(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[currentLang] || entry['it'] || key;
}

// Detect se la pagina corrente ha varianti linguistiche reali.
// La home / e /index.html sono multilingue per design.
// Altre pagine (.html) sono solo IT, salvo presenza di [data-i18n].
function pageIsMultilingual() {
    const path = window.location.pathname;
    if (path === '/' || path === '/index.html') return true;
    return document.querySelectorAll('[data-i18n]').length > 0;
}

// PUNTO A: sostituzione (NON appendChild) di canonical, og:url, og:locale.
// Invocata solo sulla homepage (l'unica pagina con varianti linguistiche reali).
function updateSEOTags(lang) {
    if (!pageIsMultilingual()) return;

    const origin = 'https://ticinotransport.ch';
    // Canonical sempre pulito: il sito è indicizzato in italiano (le lingue sono
    // solo una comodità UX lato client, non versioni separate lato URL).
    const canonicalURL = `${origin}/`;

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) canonicalLink.href = canonicalURL;

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalURL);

    const localeMap = { it:'it_CH', en:'en_US', de:'de_CH', fr:'fr_CH', ru:'ru_RU', ar:'ar_SA' };
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute('content', localeMap[lang] || 'it_CH');
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('tt_lang', lang);

    // BUG 2 FIX (v2): detection multilingue via PATH-based check (più affidabile del DOM-only)
    // Homepage / e /index.html → sempre multilingue.
    // Pagine .html interne → mono-lingua, NON sovrascrivere lang/dir/SEO.
    if (pageIsMultilingual()) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        updateSEOTags(lang);
    }

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
    stripLangParam();

    // Language dropdown
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
        langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
        langSelect.value = currentLang;
    }
    // Apply saved language (full re-render) OR update only SEO tags if IT (DOM already in IT)
    // BUG 2 FIX: updateSEOTags chiamato solo se la pagina è multilingue
    if (currentLang !== 'it') {
        setLanguage(currentLang);
    } else if (pageIsMultilingual()) {
        updateSEOTags('it');
    }
});
