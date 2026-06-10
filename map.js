const svgIcons = {
  fire: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
  machinery: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  scissors: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
  package: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
  chemistry: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.31"/><path d="M14 9.3V1.99"/><path d="M8.5 2h7"/><path d="M14 9.3a6.5 6.5 0 1 1-4 0"/><path d="M5.52 16h12.96"/></svg>',
  zap: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  thermometer: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
  biohazard: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="2"/><path d="M12 14v4"/><path d="M12 6v-2"/><path d="M6 12H4"/><path d="M20 12h-2"/><path d="M7.7 7.7L6.3 6.3"/><path d="M16.3 16.3l1.4 1.4"/><path d="M7.7 16.3L6.3 17.7"/><path d="M16.3 7.7l1.4-1.4"/><circle cx="12" cy="12" r="9"/></svg>',
  target: '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="2"/></svg>'
};

const hazardData = [
  {
    id: "gudang_bahan_baku",
    title: "Gudang Bahan Baku Serat",
    color: "#F59E0B",
    icon: svgIcons.fire,
    desc: "Risiko penumpukan bahan serat yang sangat mudah terbakar, penyimpanan dalam jumlah besar, debu pekat, serta bahaya kejatuhan tumpukan barang yang dapat menyebabkan cedera tertimpa dan memicu kebakaran besar.",
    contoh: "Kebakaran merambat dengan cepat, pekerja kejatuhan tumpukan roll kapas/serat.",
    sumber: "Tumpukan bahan serat mudah terbakar, debu yang menumpuk.",
    solusi: "Dilarang merokok keras, pemasangan smoke detector, tinggi tumpukan dibatasi maksimal 3 meter.",
    hotspots: [{ top: "37%", left: "15%" }],
    cardIndex: 0
  },
  {
    id: "ruang_spinning",
    title: "Ruang Spinning",
    color: "#3B82F6",
    icon: svgIcons.machinery,
    desc: "Risiko mesin pemintal berputar berkecepatan tinggi, debu serat kain halus beterbangan yang mudah terbakar dan terhirup, serta tingkat kebisingan mesin konstan yang mengancam pendengaran pekerja.",
    contoh: "Jari terjepit roda gigi pemintal, gangguan pernapasan akibat serat beterbangan.",
    sumber: "Mesin spinning yang berputar konstan, partikel debu halus di udara.",
    solusi: "Penggunaan masker kain/medis, pelindung mesin harus tertutup, earplug wajib dipakai.",
    hotspots: [{ top: "37%", left: "28%" }],
    cardIndex: 1
  },
  {
    id: "ruang_weaving",
    title: "Ruang Weaving",
    color: "#3B82F6",
    icon: svgIcons.machinery,
    desc: "Risiko kebisingan ekstrem berupa dentuman keras dan konstan dari mesin tenun, lorong kerja sempit, serta potensi tersandung gulungan benang yang dapat menyebabkan kecelakaan dan penurunan pendengaran permanen.",
    contoh: "Pekerja tersandung gulungan benang, penurunan pendengaran permanen.",
    sumber: "Bunyi dentuman mesin tenun yang sangat bising, lorong sempit.",
    solusi: "Penggunaan ear-muff wajib, jalur pejalan kaki bebas hambatan.",
    hotspots: [{ top: "37%", left: "38%" }],
    cardIndex: 2
  },
  {
    id: "ruang_cutting",
    title: "Ruang Cutting",
    color: "#3B82F6",
    icon: svgIcons.scissors,
    desc: "Risiko luka sayat serius dari alat pemotong listrik (gergaji kain otomatis), sisa potongan kain berserakan, serta potensi tersetrum akibat kabel terkelupas yang menyebabkan cedera fisik dan kebakaran.",
    contoh: "Tangan terpotong gergaji kain listrik, tersetrum kabel terkelupas.",
    sumber: "Pisau/gergaji pemotong kain otomatis, sisa kain berserakan.",
    solusi: "Penggunaan sarung tangan rajut besi (chainmail gloves) saat memotong, merapikan kabel.",
    hotspots: [{ top: "37%", left: "51%" }],
    cardIndex: 3
  },
  {
    id: "ruang_sewing",
    title: "Ruang Sewing",
    color: "#3B82F6",
    icon: svgIcons.target,
    desc: "Risiko tertusuk jarum mesin jahit industri, pencahayaan kurang memadai yang menyebabkan mata lelah, serta cedera ergonomis atau nyeri tulang punggung akibat posisi duduk statis yang terlalu lama.",
    contoh: "Jarum jahit tembus ke jari, mata lelah, nyeri tulang punggung (ergonomi).",
    sumber: "Jarum mesin jahit industri berkecepatan tinggi, pencahayaan redup, posisi duduk statis.",
    solusi: "Pemasangan pelindung jarum (needle guard), lampu penerangan fokus, kursi ergonomis.",
    hotspots: [{ top: "48%", left: "51%" }],
    cardIndex: 4
  },
  {
    id: "ruang_finishing",
    title: "Ruang Finishing Garmen",
    color: "#8B5CF6",
    icon: svgIcons.scissors,
    desc: "Risiko paparan uap panas dari setrika industri (steam iron) bersuhu tinggi, risiko terpeleset akibat lantai lembab karena uap, serta kelelahan akibat berdiri terlalu lama dan posisi tangan yang berulang-ulang saat menyetrika.",
    contoh: "Tangan terkena kepala setrika panas, pekerja terpeleset lantai lembab akibat uap.",
    sumber: "Setrika industri bersuhu lebih dari 200 derajat Celsius, uap air yang mengembun di lantai, posisi kerja statis.",
    solusi: "Pemakaian sarung tangan tahan panas, keset anti-slip di area kerja, rotasi jadwal kerja setiap 2 jam.",
    hotspots: [{ top: "48%", left: "56%" }],
    cardIndex: 5
  },
  {
    id: "ruang_packing",
    title: "Ruang Packing",
    color: "#3B82F6",
    icon: svgIcons.package,
    desc: "Risiko luka tergores pisau tajam atau cutter saat memotong lakban kemasan, nyeri otot dan persendian akibat gerakan berulang terus-menerus, serta cedera pinggang karena teknik mengangkat beban yang salah.",
    contoh: "Tangan tergores alat pemotong lakban/cutter, nyeri otot karena gerakan berulang.",
    sumber: "Cutter/pisau tajam, beban angkat barang.",
    solusi: "Penggunaan cutter dengan retractor otomatis (safety cutter), edukasi teknik mengangkat barang yang benar.",
    hotspots: [{ top: "37%", left: "68%" }],
    cardIndex: 6
  },
  {
    id: "ruang_dyeing",
    title: "Ruang Dyeing",
    color: "#7C3AED",
    icon: svgIcons.chemistry,
    desc: "Risiko tinggi paparan uap zat pewarna panas bersuhu lebih dari 100 derajat Celsius, tumpahan cairan kimia korosif, genangan air di lantai licin yang dapat memicu iritasi kulit, gangguan pernapasan, dan luka bakar serius.",
    contoh: "Kulit melepuh terkena uap panas, iritasi mata terkena cipratan pewarna.",
    sumber: "Cairan zat warna kimia pekat bersuhu 100 derajat Celsius ke atas, uap air.",
    solusi: "Kacamata goggle, celemek tahan air panas (apron PVC), sepatu boots anti-slip.",
    hotspots: [{ top: "47%", left: "15%" }],
    cardIndex: 7
  },
  {
    id: "ruang_finishing_kain",
    title: "Ruang Finishing Kain",
    color: "#7C3AED",
    icon: svgIcons.machinery,
    desc: "Risiko kontak langsung dengan silinder pengering/roller (stenter) yang sangat panas, suhu lingkungan kerja ekstrem yang menyebabkan dehidrasi parah dan kelelahan panas (heat exhaustion) pada para pekerja.",
    contoh: "Tangan tergiling masuk ke silinder panas (roller), pekerja dehidrasi berat.",
    sumber: "Silinder/Roller berputar yang sangat panas, suhu ruangan tinggi.",
    solusi: "Guard rail (pagar pengaman) pada roller, pemberian air minum memadai, jam istirahat berkala.",
    hotspots: [{ top: "47%", left: "23%" }],
    cardIndex: 8
  },
  {
    id: "gudang_barang_jadi",
    title: "Gudang Barang Jadi",
    color: "#F59E0B",
    icon: svgIcons.package,
    desc: "Risiko tumpukan kardus barang setinggi 4-5 meter yang tidak stabil, bahaya jatuhnya produk kemasan dari atas rak, serta potensi tabrakan pekerja dengan manuver palet jack di lorong penyimpanan.",
    contoh: "Kejatuhan kardus dari rak tingkat, tabrakan dengan palet jack.",
    sumber: "Rak setinggi 4-5 meter, barang menumpuk tidak stabil.",
    solusi: "Rak harus dibaut ke lantai, pemakaian helm safety (hard hat) bagi petugas gudang.",
    hotspots: [{ top: "54%", left: "69%" }],
    cardIndex: 9
  },
  {
    id: "loading_dock",
    title: "Loading Dock",
    color: "#0EA5E9",
    icon: svgIcons.truck,
    desc: "Risiko pergerakan aktivitas bongkar muat alat berat, perbedaan tinggi lantai dengan bak muatan, bahaya kaki terjepit dock leveler, serta lantai pelat besi yang menjadi sangat licin pada saat cuaca hujan.",
    contoh: "Kaki terjepit dock leveler, pekerja jatuh dari ramp.",
    sumber: "Perbedaan tinggi lantai dan truk, lantai pelat besi licin saat hujan.",
    solusi: "Gunakan sepatu safety (steel toe cap), pasang rantai pengaman di tepian ramp.",
    hotspots: [{ top: "66%", left: "70%" }],
    cardIndex: 10
  },
  {
    id: "parkiran_truk",
    title: "Parkiran Truk",
    color: "#0EA5E9",
    icon: svgIcons.truck,
    desc: "Risiko manuver dan aktivitas atret (mundur) kendaraan truk trailer berukuran besar, blind spot pengemudi yang mengancam pejalan kaki, serta polusi asap pembuangan diesel yang memicu keracunan gas buang.",
    contoh: "Pekerja tertabrak truk yang sedang atret (mundur), keracunan gas buang.",
    sumber: "Blind spot pengemudi truk besar, polusi asap knalpot diesel.",
    solusi: "Zona bebas pejalan kaki, kewajiban rompi reflektif (high-vis), klakson mundur truk wajib menyala.",
    hotspots: [{ top: "53%", left: "87%" }],
    cardIndex: 11
  },
  {
    id: "area_bongkar_muat",
    title: "Area Bongkar Muat",
    color: "#0EA5E9",
    icon: svgIcons.truck,
    desc: "Risiko beban palet material yang miring atau terjatuh menimpa pekerja, manuver cepat dan kemungkinan tergulingnya kendaraan forklift akibat terburu-buru di atas permukaan halaman yang mungkin tidak rata.",
    contoh: "Beban palet terbalik menimpa kaki, forklift terguling.",
    sumber: "Aktivitas bongkar yang terburu-buru, permukaan halaman tidak rata.",
    solusi: "Sertifikasi SIO (Surat Izin Operator) untuk pengemudi forklift, kecepatan forklift dibatasi 10 km/jam.",
    hotspots: [{ top: "66%", left: "87%" }],
    cardIndex: 12
  },
  {
    id: "ruang_genset",
    title: "Ruang Genset",
    color: "#EF4444",
    icon: svgIcons.zap,
    desc: "Risiko kebisingan sangat tinggi melebihi 90 desibel (dB) yang merusak pendengaran, bahaya kebakaran fatal dari tumpahan tangki bahan bakar solar, serta polusi asap mesin bertekanan tinggi.",
    contoh: "Gangguan pendengaran parah, kebakaran tumpahan solar.",
    sumber: "Bising mesin genset lebih dari 90 dB, tangki bahan bakar cair.",
    solusi: "Ruangan harus kedap suara (accoustic room), ear-muff wajib, dilarang menyalakan api/merokok.",
    hotspots: [{ top: "75%", left: "13%" }],
    cardIndex: 13
  },
  {
    id: "ruang_panel_listrik",
    title: "Ruang Panel Listrik",
    color: "#EF4444",
    icon: svgIcons.zap,
    desc: "Risiko sengatan listrik tegangan tinggi dari kabel atau trafo, percikan api korsleting yang memicu ledakan panel (arc flash), serta area kerja sempit yang membatasi pergerakan saat kondisi gawat darurat.",
    contoh: "Korsleting memicu ledakan panel (arc flash), tersetrum.",
    sumber: "Kabel tegangan tinggi, ruang sempit tanpa isolator.",
    solusi: "Karpet karet isolator (dielectric mat) di depan panel, hanya teknisi bersertifikat K3 Listrik yang boleh masuk.",
    hotspots: [{ top: "75%", left: "20%" }],
    cardIndex: 14
  },
  {
    id: "ruang_boiler",
    title: "Ruang Boiler",
    color: "#EF4444",
    icon: svgIcons.thermometer,
    desc: "Risiko ledakan katup tekanan tinggi (over-pressure) karena malfungsi indikator, uap air mendidih melebihi 150 derajat Celsius, serta bahaya kebocoran pipa yang dapat langsung menyemburkan air panas ke arah pekerja.",
    contoh: "Pipa uap pecah menyemburkan air mendidih, boiler meledak karena over-pressure.",
    sumber: "Suhu mencapai lebih dari 150 derajat Celsius, uap bertekanan lebih dari 5 bar.",
    solusi: "Kalibrasi rutin alat ukur tekanan (pressure gauge), katup pengaman (safety valve) harus berfungsi.",
    hotspots: [{ top: "75%", left: "37%" }],
    cardIndex: 15
  },
  {
    id: "ipal",
    title: "Instalasi Pengolahan Air Limbah (IPAL)",
    color: "#10B981",
    icon: svgIcons.biohazard,
    desc: "Risiko tercebur ke dalam kolam pengolahan air dalam tak berpagar, paparan dan keracunan akut akibat menghirup gas beracun (seperti H2S) hasil dekomposisi limbah cair dyeing yang menyebabkan pusing dan pingsan.",
    contoh: "Pekerja tercebur ke kolam, pusing akibat menghirup gas beracun (H2S).",
    sumber: "Kolam pengolahan yang dalam tanpa pagar, bakteri/gas dekomposisi limbah.",
    solusi: "Pagar pembatas setinggi 1 meter, life-buoy (pelampung) darurat, gas detector portabel.",
    hotspots: [{ top: "88%", left: "13%" }],
    cardIndex: 16
  },
  {
    id: "gudang_limbah_b3",
    title: "Gudang Limbah B3",
    color: "#10B981",
    icon: svgIcons.biohazard,
    desc: "Risiko reaktivitas dari campuran residu limbah kimia B3 yang mudah menguap, bahaya jerigen bocor yang mengenai mata atau kulit, serta potensi keracunan akut ketika secara tidak sengaja terhirup uap bahan kimia.",
    contoh: "Jerigen bocor mengenai mata, keracunan akut terhirup uap bahan kimia.",
    sumber: "Campuran residu berbagai jenis limbah B3 yang reaktif.",
    solusi: "Labeling limbah B3 yang jelas, wadah penampung sekunder, eyewash darurat di depan gudang.",
    hotspots: [{ top: "85%", left: "25%" }],
    cardIndex: 17
  },
  {
    id: "ruang_kompresor",
    title: "Ruang Kompresor",
    color: "#EF4444",
    icon: svgIcons.machinery,
    desc: "Risiko kebisingan tinggi lebih dari 90 dB, getaran mekanis konstan, dan potensi bahaya ledakan tangki udara bertekanan tinggi jika tidak dirawat dengan baik serta safety valve tidak berfungsi.",
    contoh: "Gangguan pendengaran akibat paparan kebisingan jangka panjang, kegagalan katup tekanan yang memicu ledakan tangki.",
    sumber: "Mesin kompresor udara bertekanan tinggi, akumulasi panas dan getaran konstan.",
    solusi: "Wajib menggunakan ear plug/muff, inspeksi berkala pada safety valve dan pressure gauge, serta drainase rutin tangki udara.",
    hotspots: [{ top: "68%", left: "53%" }],
    cardIndex: 18
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.querySelector(".denah-map");
  const bahayaGrid = document.querySelector(".bahaya-grid");
  
  if(!mapContainer || !bahayaGrid) return;

  bahayaGrid.innerHTML = "";

  const modalHTML = `
    <div class="modal-overlay" id="hazardModal">
      <div class="modal-content" style="max-height: 90vh; overflow-y: auto;">
        <button class="modal-close" onclick="closeHazardModal()">&times;</button>
        <div class="modal-icon" id="modalIcon"></div>
        <h3 class="modal-title" id="modalTitle">Title</h3>
        
        <p class="modal-desc" id="modalDesc" style="margin-bottom: 1.5rem; margin-top: 1rem;"></p>

        <div class="modal-details" style="display: flex; flex-direction: column; gap: 1rem; border-top: 1px solid #e2e8f0; padding-top: 1rem;">
          <div class="detail-item">
            <h4 style="font-size: 0.85rem; color: #ef4444; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.25rem;">&#x26A0; Sumber Bahaya</h4>
            <p id="modalSumber" style="font-size: 0.95rem; color: #334155; line-height: 1.5; margin:0;"></p>
          </div>
          <div class="detail-item">
            <h4 style="font-size: 0.85rem; color: #f59e0b; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.25rem;">&#x1F691; Contoh Kecelakaan</h4>
            <p id="modalContoh" style="font-size: 0.95rem; color: #334155; line-height: 1.5; margin:0;"></p>
          </div>
          <div class="detail-item">
            <h4 style="font-size: 0.85rem; color: #10b981; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 0.25rem;">&#x2705; Solusi &amp; Pencegahan</h4>
            <p id="modalSolusi" style="font-size: 0.95rem; color: #334155; line-height: 1.5; margin:0;"></p>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);

  hazardData.forEach(data => {
    const cardHTML = `
      <div class="bahaya-card fade-up visible" style="--card-accent:${data.color}; color:${data.color};" id="card-${data.id}">
        <div class="bahaya-icon" style="background:${data.color}20;">
          ${data.icon}
        </div>
        <h3 style="margin-top: 1rem; color: var(--slate-900);">${data.title}</h3>
        <p style="font-size: 14px; color: var(--slate-500); line-height: 1.7;">${data.desc}</p>
      </div>
    `;
    bahayaGrid.insertAdjacentHTML('beforeend', cardHTML);

    data.hotspots.forEach(pos => {
      const dot = document.createElement("div");
      dot.className = "hotspot hotspot-" + data.id;
      dot.style.top = pos.top;
      dot.style.left = pos.left;
      dot.style.setProperty('--card-accent', data.color);
      
      dot.addEventListener("click", () => openHazardModal(data));
      dot.addEventListener("mouseenter", () => highlightCard(data.id));
      dot.addEventListener("mouseleave", () => unhighlightCard(data.id));
      
      mapContainer.appendChild(dot);
    });
  });

  const cardsElements = document.querySelectorAll(".bahaya-card");
  hazardData.forEach((data, i) => {
    if(cardsElements[i]) {
      cardsElements[i].addEventListener("click", () => {
        openHazardModal(data);
        document.getElementById("bahaya").scrollIntoView({behavior: "smooth"});
      });
      cardsElements[i].addEventListener("mouseenter", () => highlightHotspots(data.id));
      cardsElements[i].addEventListener("mouseleave", () => unhighlightHotspots(data.id));
    }
  });

  window.openHazardModal = (data) => {
    document.getElementById("modalTitle").innerText = data.title;
    document.getElementById("modalDesc").innerText = data.desc;
    document.getElementById("modalContoh").innerText = data.contoh;
    document.getElementById("modalSumber").innerText = data.sumber;
    document.getElementById("modalSolusi").innerText = data.solusi;
    
    const iconColor = data.color + '20';
    document.getElementById("modalIcon").style.background = iconColor;
    const coloredIcon = data.icon.replace('stroke="currentColor"', `stroke="${data.color}"`);
    document.getElementById("modalIcon").innerHTML = coloredIcon;
    
    document.getElementById("hazardModal").classList.add("open");
  };

  window.closeHazardModal = () => {
    document.getElementById("hazardModal").classList.remove("open");
  };

  document.getElementById("hazardModal").addEventListener("click", (e) => {
    if(e.target.id === "hazardModal") closeHazardModal();
  });

  function highlightCard(id) {
    const card = document.getElementById("card-" + id);
    if(card) card.classList.add("active");
  }
  function unhighlightCard(id) {
    const card = document.getElementById("card-" + id);
    if(card) card.classList.remove("active");
  }
  function highlightHotspots(id) {
    document.querySelectorAll(".hotspot-" + id).forEach(el => el.classList.add("active"));
  }
  function unhighlightHotspots(id) {
    document.querySelectorAll(".hotspot-" + id).forEach(el => el.classList.remove("active"));
  }
});
