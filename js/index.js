
function changeSeason() {
    const seasonSelect = document.getElementById('temp');
    const seasonContent = document.getElementById('content');
    const selectedSeason = seasonSelect.value;

    let content = '';

    switch (selectedSeason) {
        case 'temp1':
            content = `
    <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>                
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                    <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/014%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>14."El Crecimiento de Naruto" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/015%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>15."El nombre de la esfera oculta"  </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/016%20Shippuuden.rmvb"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>16."El secreto detrás de un Jinchūriki" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/017%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>17."¡Gaara muere!"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/018%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>18."¡¡Abertura!! Entrada salvadora"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/019%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>19."¡Trampas en la operación! Enemigos del Equipo Gai" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/020%20Shippuuden.rm"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>20."Hiruko contra las dos kunoichi" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/021%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>21."La verdadera cara de Sasori" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/022-23%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>22-23."Naruto Shippuden" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/024%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>24. "El tercer Kazekage" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/025%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>25. "Tres minutos de vida y muerte"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/026%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>26. "10 marionetas contra 100 marionetas" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/027%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>27. "El Sueño imposible" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/028%20Shippuuden.rm"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>28. "El retorno de las bestias"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/029-30%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>29-30."Naruto Shippuden" </h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/031%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>31. "La siguiente generación"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
                    <article>
                        <div class="video-container">
                            <video
                                src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/032%20Shippuuden.mp4"
                                controls
                                width="340"
                                height="240"
                                preload="none">
                            </video>
                        </div>
                        <h2>32. "El retorno del Kazekage"</h2>
                        <div class="sharethis-inline-share-buttons"></div>
                    </article>
            </div>        
            `;
            break;
        case 'temp2':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/033%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>33. "El nuevo objetivo"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/034%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>34. "¡A formar! El nuevo Equipo Kakashi"</h2>               
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/035%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>35. "Una adición innecesaria"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/036-37%20Shippuuden.avi"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>36-37."Naruto Shippuden"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/038%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>38. "Simulando batallas"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/039%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>39. "El puente del Cielo y la Tierra"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/040-41%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>40-41."Naruto Shippuden"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/042%20Shippuuden.avi"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>42. "Orochimaru VS el Jinchūriki" </h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/043%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>43. "Las Lágrimas de Sakura"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/044%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>44. "Las circunstancias de la lucha"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/045%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>45. "Los resultados de la traición"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/046%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>46. "Página inacabada"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/047%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>47. "¡Infiltración! La guarida de la serpiente venenosa"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/048%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>48. "Lazos"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/049%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>49. "Persona importante"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/050%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>50. "La historia del libro de dibujos"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/051-52%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>51-52. "Naruto Shipuden"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>            
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/053-54%20Shippuuden.avi"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>53-54. "Naruto Shippuden"</h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>      
        </div>              
            `;
            break;
        case 'temp3':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>                
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2> </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>
            `;
            break;
        case 'temp4':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>                
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp5':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>""</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp6':
            content = `
            <div class="video-grid">
             <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2></h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src=""
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp7':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp8':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp9':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp10':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp11':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp12':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp13':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp14':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp15':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp16':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp17':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp18':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp19':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>                
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
           </div> `;
            break;
        case 'temp20':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        case 'temp21':
            content = `
            <div class="video-grid">
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/001-002%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>01-02."Naruto Shippudens"</h2>
                <a href="#" class="download-button">Descargar</a>
                <div class="sharethis-inline-share-buttons"></div>

            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/003%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>03. "Los Resultados del Entrenamiento" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/004%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>04. "El Jinchūriki de la Arena"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/005%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>05. "¡Como el Kazekage...!"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/006-07%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>06-07."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/008-09%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>08-09."Naruto Shippuden"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/010%20Shippuuden.rmvb"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>010."Jutsu de Sellado: Nueve Dragones Ilusorios"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/011%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>011."La Aprendiz de Ninja Medico"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/012%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>012."La Determinación de la Anciana"</h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            <article>
                <div class="video-container">
                    <video
                        src="https://visuales.uclv.cu/Infantiles/Animes/Naruto%20Shippuden/013%20Shippuuden.mp4"
                        controls
                        width="340"
                        height="240"
                        preload="none">
                    </video>
                </div>
                <h2>013."Los dos destinos se cruzan" </h2>
                <div class="sharethis-inline-share-buttons"></div>
            </article>
            </div>`;
            break;
        default:
            content = `<p>Por favor, selecciona una temporada para ver su contenido.</p>`;
            break;
    }

    seasonContent.innerHTML = content;

    if (window.__sharethis__) {
        window.__sharethis__.initialize();
    }
}

