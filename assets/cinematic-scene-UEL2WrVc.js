import{r as e}from"./public-url-bwu49aTW.js";import{$ as t,A as n,B as r,C as i,D as a,E as o,F as s,G as c,H as l,J as u,K as d,L as f,M as p,N as m,P as h,Q as g,R as _,S as v,T as y,U as b,V as x,X as S,Y as C,Z as ee,_ as te,a as w,b as T,c as E,d as D,et as O,f as ne,g as k,h as A,i as re,j as ie,l as ae,m as j,n as oe,o as se,p as M,q as ce,r as le,s as N,t as ue,tt as de,u as fe,v as pe,w as P,y as F,z as I}from"./GLTFLoader-Dv7i8W4m.js";var me=class extends A{constructor(e){super(e),this.type=P}parse(e){let t=function(e,t){switch(e){case 1:throw Error(`THREE.HDRLoader: Read Error: `+(t||``));case 2:throw Error(`THREE.HDRLoader: Write Error: `+(t||``));case 3:throw Error(`THREE.HDRLoader: Bad File Format: `+(t||``));default:case 4:throw Error(`THREE.HDRLoader: Memory Error: `+(t||``))}},r=function(e,t,n){t||=1024;let r=e.pos,i=-1,a=0,o=``,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));for(;0>(i=s.indexOf(`
`))&&a<t&&r<e.byteLength;)o+=s,a+=s.length,r+=128,s=String.fromCharCode.apply(null,new Uint16Array(e.subarray(r,r+128)));return-1<i&&(!1!==n&&(e.pos+=a+i+1),o+s.slice(0,i))},i=function(e){let n=/^#\?(\S+)/,i=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,a=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,o=/^\s*FORMAT=(\S+)\s*$/,s=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,c={valid:0,string:``,comments:``,programtype:`RGBE`,format:``,gamma:1,exposure:1,width:0,height:0},l,u;for((e.pos>=e.byteLength||!(l=r(e)))&&t(1,`no header found`),(u=l.match(n))||t(3,`bad initial token`),c.valid|=1,c.programtype=u[1],c.string+=l+`
`;l=r(e),!1!==l;){if(c.string+=l+`
`,l.charAt(0)===`#`){c.comments+=l+`
`;continue}if((u=l.match(i))&&(c.gamma=parseFloat(u[1])),(u=l.match(a))&&(c.exposure=parseFloat(u[1])),(u=l.match(o))&&(c.valid|=2,c.format=u[1]),(u=l.match(s))&&(c.valid|=4,c.height=parseInt(u[1],10),c.width=parseInt(u[2],10)),c.valid&2&&c.valid&4)break}return c.valid&2||t(3,`missing format specifier`),c.valid&4||t(3,`missing image size specifier`),c},a=function(e,n,r){let i=n;if(i<8||i>32767||e[0]!==2||e[1]!==2||e[2]&128)return new Uint8Array(e);i!==(e[2]<<8|e[3])&&t(3,`wrong scanline width`);let a=new Uint8Array(4*n*r);a.length||t(4,`unable to allocate buffer space`);let o=0,s=0,c=4*i,l=new Uint8Array(4),u=new Uint8Array(c),d=r;for(;d>0&&s<e.byteLength;){s+4>e.byteLength&&t(1),l[0]=e[s++],l[1]=e[s++],l[2]=e[s++],l[3]=e[s++],(l[0]!=2||l[1]!=2||(l[2]<<8|l[3])!=i)&&t(3,`bad rgbe scanline format`);let n=0,r;for(;n<c&&s<e.byteLength;){r=e[s++];let i=r>128;if(i&&(r-=128),(r===0||n+r>c)&&t(3,`bad scanline data`),i){let t=e[s++];for(let e=0;e<r;e++)u[n++]=t}else u.set(e.subarray(s,s+r),n),n+=r,s+=r}let f=i;for(let e=0;e<f;e++){let t=0;a[o]=u[e+t],t+=i,a[o+1]=u[e+t],t+=i,a[o+2]=u[e+t],t+=i,a[o+3]=u[e+t],o+=4}d--}return a},o=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=e[t+0]*i,n[r+1]=e[t+1]*i,n[r+2]=e[t+2]*i,n[r+3]=1},s=function(e,t,n,r){let i=2**(e[t+3]-128)/255;n[r+0]=k.toHalfFloat(Math.min(e[t+0]*i,65504)),n[r+1]=k.toHalfFloat(Math.min(e[t+1]*i,65504)),n[r+2]=k.toHalfFloat(Math.min(e[t+2]*i,65504)),n[r+3]=k.toHalfFloat(1)},c=new Uint8Array(e);c.pos=0;let l=i(c),u=l.width,d=l.height,f=a(c.subarray(c.pos),u,d),m,h,g;switch(this.type){case T:g=f.length/4;let e=new Float32Array(g*4);for(let t=0;t<g;t++)o(f,t*4,e,t*4);m=e,h=T;break;case P:g=f.length/4;let t=new Uint16Array(g*4);for(let e=0;e<g;e++)s(f,e*4,t,e*4);m=t,h=P;break;default:throw Error(`THREE.HDRLoader: Unsupported type: `+this.type)}return{width:u,height:d,data:m,header:l.string,gamma:l.gamma,exposure:l.exposure,type:h,colorSpace:p,minFilter:n,magFilter:n,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}},he=class e extends s{constructor(){let t=e.SkyShader,n=new S({name:t.name,uniforms:g.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:1,depthWrite:!1});super(new se(1,1,1),n),this.isSky=!0}};he.SkyShader={name:`SkyShader`,uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new O},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};function ge(e,t,n,r){let i=14821,o=()=>(i=i*1664525+1013904223>>>0,i/4294967296),s=e=>e<3.8?r?6:10:e<8?r?12:18:r?18:30,c=t.reduce((e,t)=>e+s(t[3]),0),l=new _({map:n,alphaTest:.42,side:2,roughness:.94,color:`#b3c29a`}),u=new a(new b(1,1),l,c);u.castShadow=!0,u.receiveShadow=!0;let d=new _({color:`#b6afa0`,roughness:1}),f=new a(new M(.065,.13,1,5),d,t.length*6);f.castShadow=!0,f.receiveShadow=!0;let p=new I,m=new O(0,1,0),h=new O,g=new O,v=new O,y=new D,x=0,S=0;for(let[e,n,r,i,a]of t){let t=Math.min(1.2,i*.085),c=new D(i<8?`#766146`:o()<.22?`#cac6ae`:`#7c7964`);p.position.set(e,n+i*.37,r),p.rotation.set(0,o()*6,(o()-.5)*.035),p.scale.set(t,i*.74,t),p.updateMatrix(),f.setMatrixAt(S,p.matrix),f.setColorAt(S++,c);for(let s=0;s<5;s++){let l=s*2.39996+o(),u=a*(.7+o()*.3);g.set(e,n+i*(.34+s*.065),r),v.set(e+Math.cos(l)*u,n+i*(.6+s*.055),r+Math.sin(l)*u),h.subVectors(v,g),p.position.copy(g).add(v).multiplyScalar(.5),p.quaternion.setFromUnitVectors(m,h.clone().normalize()),p.scale.set(t*.55,h.length(),t*.55),p.updateMatrix(),f.setMatrixAt(S,p.matrix),f.setColorAt(S++,c)}for(let t=0;t<s(i);t++){let t=o()*Math.PI*2,s=o(),c=Math.sqrt(o())*a*Math.sin(.35+s*2.45);p.position.set(e+Math.cos(t)*c,n+i*((i<3.8?.25:.36)+s*.55),r+Math.sin(t)*c),p.rotation.set((o()-.5)*2.1,o()*Math.PI*2,o()*Math.PI);let l=a*(1.15+o()*.7);p.scale.set(l,l*(.8+o()*.4),1),p.updateMatrix(),u.setMatrixAt(x,p.matrix),y.setHSL(.205+o()*.055,.18+o()*.1,.62+o()*.16),u.setColorAt(x++,y)}}u.instanceMatrix.needsUpdate=!0,f.instanceMatrix.needsUpdate=!0,u.computeBoundingSphere(),f.computeBoundingSphere();let C={value:0};return l.onBeforeCompile=e=>{e.uniforms.uWind=C,e.vertexShader=`uniform float uWind;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      float phase=instanceMatrix[3].x*.17+instanceMatrix[3].z*.12;
      transformed.x+=sin(uWind*.6+phase)*.035*(position.y+.5);`)},l.customProgramCacheKey=()=>`woodland-wind-v3`,e.add(f,u),{update(e){C.value=e}}}function L(e,t,n=!1){let r=e.geometry,i=r.getAttribute(`position`),a=r.getAttribute(`normal`),o=new Float32Array(i.count*2);for(let e=0;e<i.count;e++)o[e*2]=(n&&Math.abs(a.getX(e))>.7?i.getZ(e):i.getX(e))/t,o[e*2+1]=(n?i.getY(e):i.getZ(e))/t;r.setAttribute(`uv`,new N(o,2))}function _e(e,t,n){let r=[],i=[],o=n?7:13;for(let e=0;e<o;e++){let t=e*2.39996,n=Math.cos(t)*.2,a=Math.sin(t)*.2,o=.55+e%5*.12,s=.25+e%3*.12,c=new O(Math.cos(t+.7)*.045,0,Math.sin(t+.7)*.045),l=[new O(n,0,a),new O(n+Math.cos(t)*s*.4,o*.6,a+Math.sin(t)*s*.4),new O(n+Math.cos(t)*s,o,a+Math.sin(t)*s)],u=r.length/3;l.forEach((e,t)=>{let n=t===2?.08:1;r.push(e.x-c.x*n,e.y,e.z-c.z*n,e.x+c.x*n,e.y,e.z+c.z*n)}),i.push(u,u+1,u+2,u+1,u+3,u+2,u+2,u+3,u+4,u+3,u+5,u+4)}let s=new E;s.setAttribute(`position`,new F(r,3)),s.setIndex(i),s.computeVertexNormals();let c=n?t.filter((e,t)=>t%2==0):t,l=new _({color:`#78834b`,roughness:1,side:2}),u=new a(s,l,c.length),d=new I,f=new D;c.forEach(([e,t,n,r,i],a)=>{d.position.set(e,t,n),d.rotation.set(0,a*2.4,0),d.scale.set(r*2.1,r,r*2.1),d.updateMatrix(),u.setMatrixAt(a,d.matrix),f.setHSL(i?.25:.22,.25,.64+a%5*.04),u.setColorAt(a,f)}),u.receiveShadow=!0,u.castShadow=!1,u.computeBoundingSphere(),e.add(u)}function ve(e,t=`siding`){let n=[`roof`,`tiled-roof`,`weathered-roof`].includes(t)||t===`fence`,r=new _({color:e,roughness:t===`weathered-roof`?.94:n?.64:.94,metalness:t===`weathered-roof`?.02:n?.24:0,side:t===`fence`?2:0});return r.onBeforeCompile=e=>{e.vertexShader=`varying vec3 vArchitecturePosition; varying vec2 vArchitectureUV;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
 vArchitecturePosition=position; vArchitectureUV=uv;`),e.fragmentShader=`varying vec3 vArchitecturePosition; varying vec2 vArchitectureUV;
      float architectureHash(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
      float architectureNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(architectureHash(i),architectureHash(i+vec2(1,0)),f.x),mix(architectureHash(i+vec2(0,1)),architectureHash(i+vec2(1,1)),f.x),f.y);}
      float architectureLine(float p,float thickness){
        float d=abs(fract(p+.5)-.5);float aa=max(fwidth(p),.002);
        return 1.-smoothstep(thickness-aa,thickness+aa,d);
      }
`+e.fragmentShader;let n={brick:`float row=floor(uv.y/.085);
        vec2 grid=vec2(uv.x/.265+mod(row,2.)*.5,uv.y/.085);
        float mortar=max(architectureLine(grid.x,.015),architectureLine(grid.y,.045));
        float brickShade=architectureHash(floor(grid));
        diffuseColor.rgb*=.83+brickShade*.29;
        diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.32,.29,.23),mortar*visibility*.7);
        architectureRelief=-mortar*.006;`,roof:`float seam=architectureLine(uv.x/.52,.014);
        float sheet=architectureHash(vec2(floor(uv.x/.52),0.));
        diffuseColor.rgb*=.93+sheet*.12-seam*.32*visibility;architectureRelief=seam*.015;`,"tiled-roof":`float panel=architectureLine(uv.x/.24,.045);
        float row=architectureLine(uv.y/.35,.035);
        diffuseColor.rgb*=1.-(panel*.16+row*.21)*visibility;architectureRelief=sin(uv.x/ .24*6.283)*.009-row*.006;`,"weathered-roof":`float corrugation=sin(uv.x*48.);
        float wear=architectureHash(floor(uv*3.));
        diffuseColor.rgb*=.9+wear*.15+corrugation*.1*visibility;architectureRelief=corrugation*.008;`,fence:`float rib=sin((p.x+p.z)*48.);diffuseColor.rgb*=1.-rib*.11*visibility;`,paving:`vec2 grid=vec2(p.x*4.+mod(floor(p.z*2.),2.)*.5,p.z*2.);
        float seam=max(architectureLine(grid.x,.018),architectureLine(grid.y,.028));
        diffuseColor.rgb*=.88+architectureHash(floor(grid))*.22-seam*.26*visibility;`,gravel:`float pebble=architectureNoise(p.xz*28.);
        float areaTone=architectureNoise(p.xz*.7);
        diffuseColor.rgb*=.84+areaTone*.16+(pebble-.5)*.26*visibility;architectureRelief=pebble*.003;`,stucco:`float plaster=architectureNoise(uv*26.);diffuseColor.rgb*=.96+plaster*.075;architectureRelief=plaster*.0015;`,membrane:`float weather=architectureNoise(uv*2.4);diffuseColor.rgb*=.93+weather*.13;architectureRelief=weather*.001;`,"stone-siding":`float row=floor(uv.y/.19);
        vec2 grid=vec2(uv.x/.43+mod(row,2.)*.5,uv.y/.19);
        float joint=max(architectureLine(grid.x,.012),architectureLine(grid.y,.027));
        float panelGrain=architectureNoise(uv*vec2(9.,24.));
        diffuseColor.rgb*=.91+panelGrain*.16-joint*.22*visibility;
        architectureRelief=panelGrain*.006-joint*.007;`,siding:`float seam=architectureLine(uv.y/.18,.018);
        float board=architectureHash(vec2(floor(uv.y/.18),0.));
        diffuseColor.rgb*=.97+board*.05-seam*.12*visibility;architectureRelief=-pow(.5+.5*cos(uv.y/.18*6.283),12.)*.0025;`};e.fragmentShader=e.fragmentShader.replace(`#include <color_fragment>`,`#include <color_fragment>
      vec3 p=vArchitecturePosition;vec2 uv=vArchitectureUV;
      float visibility=1.-smoothstep(65.,220.,distance(cameraPosition,p));
      float grain=architectureNoise(p.xz*15.);
      float architectureRelief=0.;
      ${n[t]||n.siding}
      diffuseColor.rgb*=.98+grain*.04;`),e.fragmentShader=e.fragmentShader.replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
      float relief=architectureRelief*visibility;
      vec3 surfaceX=dFdx(-vViewPosition),surfaceY=dFdy(-vViewPosition);
      vec3 gradientX=cross(surfaceY,normal),gradientY=cross(normal,surfaceX);
      float determinant=dot(surfaceX,gradientX);
      vec3 surfaceGradient=sign(determinant)*(dFdx(relief)*gradientX+dFdy(relief)*gradientY);
      normal=normalize(max(abs(determinant),.00000001)*normal-surfaceGradient);`)},r.customProgramCacheKey=()=>`local-architecture-relief-v2-`+t,r}var R={leafy_grass:[.32378885900877247,.23865014125778894,.10857234782976836],brick_wall_005:[.25557339429347664,.166697289214637,.10882313798176912],grass_path_2:[.2873780305199851,.23546333762015187,.13932107305269478],plastered_wall:[.43626498636938804,.39246824151194826,.33521790042164357],brown_planks_03:[.16325253205538967,.14136158152206366,.1130829925659807],aerial_asphalt_01:[.1419256350726056,.13037162747556758,.14468039960885062]};async function ye(t){let n=Object.keys(R);return Object.fromEntries(await Promise.all(n.map(async n=>{let[r,i,a]=await Promise.all([`color`,`normal`,`roughness`].map(r=>t(e(`/textures/pbr/${n}-${r}.webp`),r===`color`))),o=n===`leafy_grass`?3:n===`grass_path_2`?1.6:n===`brick_wall_005`?1.2:n===`brown_planks_03`?1.4:n===`aerial_asphalt_01`?3:2;return[r,i,a].forEach(e=>e.repeat.set(1/o,1/o)),[n,{color:r,normal:i,roughness:a,mean:new O().fromArray(R[n])}]})))}function z(e,n,r={}){let i=new _({color:e,map:n.color,normalMap:n.normal,normalScale:new t(r.normal??.7,r.normal??.7),roughnessMap:n.roughness,roughness:r.roughness??1,vertexColors:!!r.terrain,metalness:0});return i.onBeforeCompile=e=>{e.uniforms.uScanMean={value:n.mean},e.uniforms.uScanStrength={value:r.strength??.75},e.vertexShader=`varying vec3 vScanPosition;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
vScanPosition=position;`),e.fragmentShader=`uniform vec3 uScanMean;uniform float uScanStrength;varying vec3 vScanPosition;
`+e.fragmentShader,e.fragmentShader=e.fragmentShader.replace(`#include <map_fragment>`,`
      vec3 scanColor=texture2D(map,vMapUv).rgb;
      vec3 relativeColor=clamp(scanColor/max(uScanMean,vec3(.02)),vec3(.32),vec3(2.15));
      float distanceFade=1.-smoothstep(65.,330.,distance(cameraPosition,vScanPosition));
      diffuseColor.rgb*=mix(vec3(1.),relativeColor,uScanStrength*(.35+.65*distanceFade));
    `),e.fragmentShader=e.fragmentShader.replace(`#include <roughnessmap_fragment>`,`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor,.56,1.);`)},i.customProgramCacheKey=()=>`scanned-surface-v1-${!!r.terrain}-${r.strength??.75}`,i}var B=(e,t,n)=>{let r=Math.floor((t-e.extent[0])/e.step),i=Math.floor((n-e.extent[1])/e.step);if(r<0||i<0||r>=e.columns||i>=e.rows)return[0,255,0];let a=(i*e.columns+r)*4;return[e.data[a],e.data[a+1],e.data[a+2]]},V=(e,t)=>{let n=Math.sin(e*127.1+t*311.7)*43758.5453;return n-Math.floor(n)};function be(e,t,n,r){let s=new i;s.name=`Near-ground grass and grit`,s.visible=!1,e.add(s);let c=[],l=[],u=[];for(let e=0;e<7;e++){let t=e*2.4,n=Math.cos(t),r=Math.sin(t),i=new O(-r,0,n),a=.045+e%4*.013,o=.025+e*.004,s=c.length/3;[0,.52,1].forEach((e,t)=>{let s=t===2?5e-4:.007*(1-e*.65);for(let t of[-1,1])c.push(n*(.045+o*e*e)+i.x*s*t,a*e,r*(.045+o*e*e)+i.z*s*t),l.push(.54+e*.38,.64+e*.27,.4+e*.22)}),u.push(s,s+1,s+2,s+1,s+3,s+2,s+2,s+3,s+4,s+3,s+5,s+4)}let d=new E;d.setAttribute(`position`,new F(c,3)),d.setAttribute(`color`,new F(l,3)),d.setIndex(u),d.computeVertexNormals();let f=new _({color:`#c6cc9e`,roughness:.97,vertexColors:!0,side:2}),p={value:0};f.onBeforeCompile=e=>{e.uniforms.uGrassTime=p,e.vertexShader=`uniform float uGrassTime;
`+e.vertexShader,e.vertexShader=e.vertexShader.replace(`#include <begin_vertex>`,`#include <begin_vertex>
      vec3 root=instanceMatrix[3].xyz;
      float fade=1.-smoothstep(${r?`11.,17.`:`16.,24.`},distance(root.xz,cameraPosition.xz));
      transformed.y*=fade;transformed.x+=sin(uGrassTime*1.1+root.x*.9+root.z*.4)*position.y*.13*fade;`)},f.customProgramCacheKey=()=>`ground-blades-v1-${r}`;let m=new a(d,f,r?8e3:24e3);m.count=0,m.receiveShadow=!0,m.frustumCulled=!1,s.add(m);let h=new _({color:`#a19a86`,roughness:1}),g=new a(new o(1,0),h,1600);g.count=0,g.receiveShadow=!0,g.frustumCulled=!1,s.add(g);let v=new I,y=new D,b=1/0,x=1/0;return{update(e,i,a){if(s.visible=i,p.value=a,!i)return;let o=Math.floor(e.position.x/5)*5,c=Math.floor(e.position.z/5)*5;if(o===b&&c===x)return;b=o,x=c;let l=0,u=0,d=r?18:25,f=r?.36:.26;for(let e=Math.floor((c-d)/f);e<=(c+d)/f;e++)for(let r=Math.floor((o-d)/f);r<=(o+d)/f;r++){let i=V(r,e),a=(r+i*.8)*f,s=(e+V(e,r+11)*.8)*f;if(Math.hypot(a-o,s-c)>d)continue;let p=B(t,a,s);if(i<p[0]/255*.93&&l<m.instanceMatrix.count){v.position.set(a,n(a,s)-.018,s),v.rotation.set(0,i*6.28,0);let t=.65+V(r+9,e)*1.3;v.scale.setScalar(t),v.updateMatrix(),m.setMatrixAt(l,v.matrix),y.setHSL(.2+i*.065,.18+i*.18,.48+i*.15),m.setColorAt(l++,y)}else if(p[2]===2&&i<.065&&u<1600){v.position.set(a,n(a,s)+.08,s),v.rotation.set(i,i*6.28,i*.5);let t=.012+V(r-3,e)*.03;v.scale.set(t*1.3,t*.5,t),v.updateMatrix(),g.setMatrixAt(u,v.matrix),y.setHSL(.12,.1,.39+i*3),g.setColorAt(u++,y)}}m.count=l,g.count=u,m.instanceMatrix.needsUpdate=!0,g.instanceMatrix.needsUpdate=!0,m.instanceColor&&(m.instanceColor.needsUpdate=!0),g.instanceColor&&(g.instanceColor.needsUpdate=!0)},counts(){return{grass:m.count,stones:g.count}}}}function xe(e,t,r){let i=new j(t.data,t.columns,t.rows,d);i.minFilter=i.magFilter=n,i.needsUpdate=!0,r.push(i);let a=e.onBeforeCompile;e.onBeforeCompile=(t,n)=>{a.call(e,t,n),t.uniforms.uGroundContact={value:i},t.fragmentShader=`uniform sampler2D uGroundContact;
`+t.fragmentShader,t.fragmentShader=t.fragmentShader.replace(`#include <aomap_fragment>`,`#include <aomap_fragment>
      vec2 groundUv=(vScanPosition.xz-vec2(-590.,-625.))/vec2(1180.,1250.);
      float contact=texture2D(uGroundContact,groundUv).g;
      reflectedLight.indirectDiffuse*=mix(.5,1.,smoothstep(0.,.85,contact));`)},e.customProgramCacheKey=()=>`scanned-ground-contact-v1`}function H(e,t,n){let r=!1;for(let i=0,a=n.length-1;i<n.length;a=i++){let[o,s]=n[i],[c,l]=n[a];s>t!=l>t&&e<(c-o)*(t-s)/(l-s)+o&&(r=!r)}return r}function U(e,t,n=[]){let r=new Map,i=new Map,a=(e,t)=>`${Math.floor(e/16)},${Math.floor(t/16)}`;e.obstacles.forEach((e,t)=>{let n=e.rings[0].map(e=>e[0]),i=e.rings[0].map(e=>e[1]);for(let e=Math.floor(Math.min(...n)/16);e<=Math.floor(Math.max(...n)/16);e++)for(let n=Math.floor(Math.min(...i)/16);n<=Math.floor(Math.max(...i)/16);n++){let i=`${e},${n}`;r.has(i)||r.set(i,[]),r.get(i).push(t)}});for(let e of n){let t=a(e[0],e[2]);i.has(t)||i.set(t,[]),i.get(t).push(e)}let o=(t,n)=>{let[o,s,c,l]=e.bounds;if(t<o||t>c||n<s||n>l)return!1;for(let i of r.get(a(t,n))||[]){let r=e.obstacles[i].rings;if(H(t,n,r[0])&&!r.slice(1).some(e=>H(t,n,e)))return!1}for(let e=-1;e<=1;e++)for(let r=-1;r<=1;r++)for(let o of i.get(a(t+e*16,n+r*16))||[])if(o[3]>3.8&&Math.hypot(o[0]-t,o[2]-n)<.32+Math.min(1.2,o[3]*.085)*.13)return!1;return!0};return{clear:o,move:(e,n,r,i)=>{let a=Math.max(1,Math.ceil(Math.hypot(r,i)/.16)),s=r/a,c=i/a;for(let r=0;r<a;r++){let r=(r,i)=>o(r,i)&&Math.abs(t(r,i)-t(e,n))<=Math.hypot(r-e,i-n)*.85+.015;r(e+s,n+c)?(e+=s,n+=c):Math.abs(s)>1e-5&&r(e+s,n)?e+=s:Math.abs(c)>1e-5&&r(e,n+c)&&(n+=c)}return[e,n]}}}var W=[{label:`У дома №116`,position:[285,-17],target:[271,-7]},{label:`Кирпичный дом 3с1`,position:[232,-193],target:[217,-201]},{label:`Рядом с Десной`,position:[85,335],target:[15,365]}],G={KeyW:`forward`,ArrowUp:`forward`,KeyS:`back`,ArrowDown:`back`,KeyA:`left`,KeyD:`right`,ArrowLeft:`turnLeft`,ArrowRight:`turnRight`,KeyQ:`turnLeft`,KeyE:`turnRight`,PageUp:`lookUp`,PageDown:`lookDown`};function Se(e,t,n,r,i){let a=U(n,r,i),o=new Set,s=new Set,c=!1,l=0,u=.04,d=null,f=0,p=0,m=!1,h=new pe(0,0,0,`YXZ`),g=()=>{o.clear(),s.clear(),d=null},_=()=>{h.set(u,l,0),e.quaternion.setFromEuler(h)},v=e=>{!c||e.altKey||e.ctrlKey||e.metaKey||!(e.code in G)||e.target?.closest(`input,select,textarea,[contenteditable=true]`)||(e.preventDefault(),!o.has(e.code)&&!e.repeat&&w(.06,new Set([G[e.code]])),o.add(e.code))},y=e=>{o.delete(e.code)},b=e=>{c&&e.button===0&&d===null&&(d=e.pointerId,f=e.clientX,p=e.clientY,t.setPointerCapture(e.pointerId),t.focus({preventScroll:!0}))},x=e=>{d===e.pointerId&&(l-=(e.clientX-f)*.003,u=Math.max(-1.05,Math.min(1.05,u-(e.clientY-p)*.003)),f=e.clientX,p=e.clientY,_())},S=e=>{d===e.pointerId&&(d=null)},C=()=>g(),ee=e=>{e.target?.closest(`input,select,textarea,[contenteditable=true]`)&&g()};window.addEventListener(`keydown`,v),window.addEventListener(`keyup`,y),window.addEventListener(`blur`,C),document.addEventListener(`visibilitychange`,C),document.addEventListener(`focusin`,ee),t.addEventListener(`pointerdown`,b),t.addEventListener(`pointermove`,x),t.addEventListener(`pointerup`,S),t.addEventListener(`pointercancel`,S),t.addEventListener(`lostpointercapture`,S);let te=(t,n,i)=>{let o=Math.max(1,Math.hypot(t,n)),s=3.2*i,c=(-Math.sin(l)*t+Math.cos(l)*n)/o*s,u=(-Math.cos(l)*t-Math.sin(l)*n)/o*s,[d,f]=a.move(e.position.x,e.position.z,c,u);Math.hypot(c,u)>.001&&(m=Math.hypot(d-e.position.x,f-e.position.z)<.001),e.position.set(d,r(d,f)+1.7,f)},w=(e,t)=>{let n=(e,n)=>Number(t.has(e))-Number(t.has(n));l+=n(`turnLeft`,`turnRight`)*e*1.15,u=Math.max(-1.05,Math.min(1.05,u+n(`lookUp`,`lookDown`)*e*.8)),te(n(`forward`,`back`),n(`right`,`left`),e),_()};return{enable(e){c=e,g(),t.tabIndex=e?0:-1,t.setAttribute(`aria-label`,e?`Прогулка: W A S D — движение, стрелки влево и вправо — поворот, Page Up и Page Down — взгляд вверх и вниз`:`Трёхмерная местность`)},enter(t){g();let n=W[t]||W[0],[i,o]=[...n.position];if(!a.clear(i,o))search:for(let e=.5;e<12;e+=.5)for(let t=0;t<Math.PI*2;t+=.3){let n=i+Math.cos(t)*e,r=o+Math.sin(t)*e;if(a.clear(n,r)){i=n,o=r;break search}}e.position.set(i,r(i,o)+1.7,o),l=Math.atan2(i-n.target[0],o-n.target[1]),u=.04,m=!1,_()},tick(e){if(!c)return;let t=new Set(s);o.forEach(e=>{G[e]&&t.add(G[e])}),w(Math.min(e,.1),t)},hold(e,t){t&&c?s.add(e):s.delete(e)},step(e){c&&w(.22,new Set([e]))},state(){return{x:e.position.x,z:e.position.z,yaw:l,blocked:m}},dispose(){g(),window.removeEventListener(`keydown`,v),window.removeEventListener(`keyup`,y),window.removeEventListener(`blur`,C),document.removeEventListener(`visibilitychange`,C),document.removeEventListener(`focusin`,ee),t.removeEventListener(`pointerdown`,b),t.removeEventListener(`pointermove`,x),t.removeEventListener(`pointerup`,S),t.removeEventListener(`pointercancel`,S),t.removeEventListener(`lostpointercapture`,S)}}}async function Ce(t,n){let a=new w({antialias:!0,alpha:!0,powerPreference:`low-power`});a.setPixelRatio(Math.min(devicePixelRatio,innerWidth<700?1.2:1.5)),a.outputColorSpace=u,a.toneMapping=4,a.toneMappingExposure=.95,a.shadowMap.enabled=!0,a.shadowMap.type=1;let o=new C,d=new i;o.background=new D(`#bacac3`),o.fog=new v(`#bacac3`,58e-5);let p=new x(48,1,.6,16e3),g=new r(-700,700,700,-700,.6,16e3),T=p,E=new oe(T,a.domElement);E.enabled=!1,E.enableDamping=!0,E.dampingFactor=.075,E.minDistance=22,E.maxDistance=2100,E.maxPolarAngle=Math.PI*.47,E.minPolarAngle=1e-4,E.enablePan=!0,E.screenSpacePanning=!1,E.zoomSpeed=.7,E.rotateSpeed=.55,E.minZoom=.55,E.maxZoom=45;let k=!1,A=!1,j,se,M=0,N=new O(-720,1100,-280),pe=new O(1/0,0,0),P=new y(`#dbeaf3`,`#485636`,.85);o.add(P);let F=new te(`#fff3dd`,2.35);F.position.set(-720,1100,-280),F.castShadow=!0,F.shadow.mapSize.set(innerWidth<700?1024:4096,innerWidth<700?1024:4096),Object.assign(F.shadow.camera,{left:-650,right:650,top:650,bottom:-650,near:30,far:2600}),F.shadow.camera.updateProjectionMatrix(),F.shadow.normalBias=.4,F.shadow.bias=-15e-5,o.add(F,F.target);let I=(e=!1)=>{let t=A?p.position:new O;if(!e&&pe.distanceToSquared(t)<144)return;pe.copy(t),F.target.position.copy(t),F.position.copy(t).add(N);let n=A?85:650;Object.assign(F.shadow.camera,{left:-n,right:n,top:n,bottom:-n}),F.shadow.camera.updateProjectionMatrix(),F.shadow.normalBias=A?.025:.4,F.shadow.bias=A?-25e-6:-15e-5,a.shadowMap.needsUpdate=!0},R=new he;R.scale.setScalar(24e3),Object.assign(R.material.uniforms.turbidity,{value:6}),R.material.uniforms.rayleigh.value=1.25,R.material.uniforms.cloudCoverage.value=.32,R.material.uniforms.cloudDensity.value=.28,R.material.uniforms.sunPosition.value.copy(F.position),R.material.uniforms.uHorizonColor={value:o.fog.color.clone().convertLinearToSRGB()},R.material.fragmentShader=`uniform vec3 uHorizonColor;
`+R.material.fragmentShader.replace(`#include <colorspace_fragment>`,`#include <colorspace_fragment>
    gl_FragColor.rgb=mix(uHorizonColor,gl_FragColor.rgb,smoothstep(-.02,.2,direction.y));`),o.add(R);let B,V,H,U=(e,t)=>4,W=new de(innerWidth<700?512:1024,innerWidth<700?320:640,{depthBuffer:!0}),G=new x,Ce=new h,K=new O(1/0,0,0),we=new c,Te=[],q=[],J=new re(innerWidth<700?64:128,{generateMipmaps:!0,minFilter:ie}),Ee=new ne(.3,130,J),Y=new O(1/0,0,0),De=-20,Oe=-10,X=new s(new b(3e4,3e4),new _({color:`#66744b`,roughness:1}));X.geometry.rotateX(-Math.PI/2),X.position.y=-6,X.receiveShadow=!0,o.add(X);let Z={uTime:{value:0},uDeep:{value:new D(`#303c32`)},uShallow:{value:new D(`#65705a`)},uSunDirection:{value:N.clone().normalize()},uSunColor:{value:F.color.clone()},uFog:{value:58e-5},uReflection:{value:W.texture},uReflectionMatrix:{value:Ce},uReflect:{value:0}},ke=new S({uniforms:Z,vertexShader:`varying vec3 vWorld; uniform float uTime;uniform mat4 uReflectionMatrix;varying vec4 vReflection;
      void main(){ vec3 p=position; p.y+=sin(p.x*.045+p.z*.035+uTime*.35)*.025;
        vWorld=(modelMatrix*vec4(p,1.)).xyz;vReflection=uReflectionMatrix*vec4(vWorld,1.); gl_Position=projectionMatrix*viewMatrix*vec4(vWorld,1.); }`,fragmentShader:`varying vec3 vWorld;varying vec4 vReflection;uniform sampler2D uReflection;uniform float uReflect; uniform float uTime; uniform vec3 uDeep; uniform vec3 uShallow;uniform vec3 uSunDirection;uniform vec3 uSunColor; uniform float uFog;
      void main(){
        float waves=sin(vWorld.x*.11+vWorld.z*.034+uTime*.42)*sin(vWorld.z*.087-vWorld.x*.028-uTime*.27);
        vec2 flow=vWorld.xz+vec2(uTime*.11,uTime*.025);
        vec2 ripple=vec2(.83,.56)*cos(dot(flow,vec2(.83,.56))*12.+uTime*.7)*.027;
        ripple+=vec2(-.37,.93)*cos(dot(flow,vec2(-.37,.93))*23.-uTime*1.1)*.017;
        ripple+=vec2(.96,-.28)*sin(dot(flow,vec2(.96,-.28))*41.+uTime*.8)*.009;
        float detail=1.-smoothstep(50.,250.,distance(cameraPosition,vWorld));
        vec3 n=normalize(vec3(cos(vWorld.x*.7+uTime*.2)*.024+ripple.x*detail,1.,sin(vWorld.z*.9+uTime*.35)*.022+ripple.y*detail));
        vec3 eye=normalize(cameraPosition-vWorld); float fresnel=pow(1.-max(dot(eye,n),0.),3.);
        float glint=pow(max(dot(reflect(-uSunDirection,n),eye),0.),240.);
        vec3 color=mix(uDeep,uShallow,.22+fresnel*.48+waves*.065)+uSunColor*glint*.58;
        color=mix(color,vec3(.45,.62,.62),fresnel*.35);
        vec2 reflectedUV=clamp(vReflection.xy/vReflection.w+n.xz*.07,.004,.996);
        vec3 reflection=(texture2D(uReflection,reflectedUV+vec2(.0015,.001)).rgb+texture2D(uReflection,reflectedUV-vec2(.0015,.001)).rgb+texture2D(uReflection,reflectedUV+vec2(-.0015,.001)).rgb+texture2D(uReflection,reflectedUV+vec2(.0015,-.001)).rgb)*.22;
        float riverLevel=1.-smoothstep(.15,.5,abs(vWorld.y-4.));
        color=mix(color,reflection,uReflect*riverLevel*(.3+fresnel*.58));
        float fog=1.-exp(-pow(length(cameraPosition-vWorld)*uFog,2.));
        color=mix(color,vec3(.49,.59,.55),fog);
        gl_FragColor=vec4(color,1.);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,side:2}),Q=!1,$=null,Ae=[],je=new ee,Me=async(e,t=!0)=>{let r=await je.loadAsync(e);if(n.aborted||Q)throw r.dispose(),new DOMException(`Aborted`,`AbortError`);return r.colorSpace=t?u:``,r.wrapS=r.wrapT=ce,r.anisotropy=Math.min(8,a.capabilities.getMaxAnisotropy()),Ae.push(r),r},Ne=()=>{if(Q)return;Q=!0;let e=new Set;o.traverse(t=>{t instanceof s&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(t=>e.add(t)))}),e.forEach(e=>e.dispose()),Ae.forEach(e=>e.dispose()),ke.dispose(),E.dispose(),j?.dispose(),F.shadow.dispose(),W.dispose(),J.dispose(),B?.dispose(),a.dispose(),a.domElement.remove()};try{if($=(await new ue().loadAsync(e(`/models/prometey-landscape.glb`))).scene,n.aborted)throw o.add($),Ne(),new DOMException(`Aborted`,`AbortError`);o.add($);let[r,i,c,l,u,h,g]=await Promise.all([Me(e(`/textures/grass-color.jpg`)),Me(e(`/textures/birch-branch.png`)),fetch(e(`/data/landscape.json`),{signal:n}).then(e=>{if(!e.ok)throw Error(`Landscape data unavailable`);return e.json()}),new me().loadAsync(e(`/textures/day-sky.hdr`)),fetch(e(`/data/navigation.json`),{signal:n}).then(e=>{if(!e.ok)throw Error(`Navigation data unavailable`);return e.json()}),ye(Me),Promise.all([fetch(e(`/data/surface-field.json`),{signal:n}).then(e=>{if(!e.ok)throw Error(`Ground detail metadata unavailable`);return e.json()}),fetch(e(`/data/surface-field.bin`),{signal:n}).then(e=>{if(!e.ok)throw Error(`Ground detail mask unavailable`);return e.arrayBuffer()})]).then(([e,t])=>({...e,data:new Uint8Array(t)}))]);if(Ae.push(l),n.aborted)throw Ne(),new DOMException(`Aborted`,`AbortError`);l.mapping=303;let v=new le(a);B=v.fromEquirectangular(l),v.dispose(),o.environment=B.texture,o.environmentIntensity=.65;let y=c.height_field;y&&(U=(e,t)=>{let[n,r,i,a]=y.extent,o=m.clamp((e-n)/(i-n)*(y.columns-1),0,y.columns-1.001),s=m.clamp((-t-r)/(a-r)*(y.rows-1),0,y.rows-1.001),c=Math.floor(o),l=Math.floor(s),u=l*y.columns+c;return m.lerp(m.lerp(y.heights[u],y.heights[u+1],o-c),m.lerp(y.heights[u+y.columns],y.heights[u+y.columns+1],o-c),s-l)}),se=u,j=Se(p,a.domElement,u,U,c.vegetation),i.wrapS=i.wrapT=fe,$.traverse(e=>{if(!(e instanceof s))return;let t=e.name.replaceAll(`_`,` `).toLowerCase();e.castShadow=!e.name.includes(`Terrain`)&&!e.name.includes(`River`),e.receiveShadow=!0,e.name.includes(`Cut`)&&(e.visible=!1),e.name.includes(`River`)&&(e.material.dispose(),e.material=ke,Te.push(e));let n=e.material;if(t.includes(`terrain`)||t.includes(`garden lawn`)||t===`track grass`){L(e,1);let r=z(t===`track grass`?n.color:`#ffffff`,h.leafy_grass,{terrain:e.geometry.hasAttribute(`color`),strength:.94,normal:.85});xe(r,g,Ae),e.material=r,n.dispose()}else if(t.includes(`gravel`)||t.includes(`earth paths`))L(e,1),e.material=z(n.color,h.grass_path_2,{strength:.85,normal:.95}),n.dispose();else if(t.includes(`roads`)||t.includes(`lanes`))L(e,1),e.material=z(`#6f7270`,h.aerial_asphalt_01,{strength:.7,normal:.65}),n.dispose();else if(t.includes(`brick`))e.material=z(n.color,h.brick_wall_005,{strength:t===`honey brick`?.32:.65,normal:t===`honey brick`?.42:.7}),n.dispose();else if(t.includes(`stucco`))e.material=z(n.color,h.plastered_wall,{strength:.65,normal:.6}),n.dispose();else if(t===`timber siding`||t===`porch timber`||t===`weathered siding`||t===`dark decking`){let r=t===`weathered siding`;if(r){let t=e.geometry.getAttribute(`uv`);for(let e=0;e<t.count;e++){let n=t.getX(e),r=t.getY(e);t.setXY(e,r,-n)}t.needsUpdate=!0}e.material=z(n.color,h.brown_planks_03,{strength:r?.46:.7,normal:r?.38:.65}),n.dispose()}else if(t.includes(`siding`)||t.includes(`roofs`)||t.includes(`brick`)||t.includes(`stucco`)||t.includes(`fence`)||t===`paving`){let r=t.includes(`fence`)?`fence`:t===`stone siding`?`stone-siding`:t===`flat roofs`?`membrane`:t.includes(`chocolate roofs`)?`tiled-roof`:t.includes(`weathered roofs`)?`weathered-roof`:t.includes(`roofs`)?`roof`:t.includes(`brick`)?`brick`:t===`paving`?`paving`:t.includes(`stucco`)?`stucco`:`siding`;e.material=ve(`#`+n.color.getHexString(),r),n.dispose()}else t===`window glass`?(n.dispose(),e.material=new f({color:`#c2d0c8`,transparent:!0,opacity:.3,depthWrite:!1,roughness:.1,metalness:0,envMap:o.environment,envMapIntensity:1.15,clearcoat:1,clearcoatRoughness:.06}),e.castShadow=!1,q.push(e)):t===`curtain linen`?(n.roughness=1,n.side=2):t===`hardware`?(n.roughness=.3,n.metalness=.72):t===`door panels`?(n.roughness=.68,n.metalness=.12):t===`greenhouse glass`&&(n.dispose(),e.material=new _({color:`#afc9bb`,transparent:!0,opacity:.4,roughness:.22,metalness:.15,side:2,depthWrite:!1}),e.castShadow=!1);e.material instanceof _&&(e.material.flatShading=n.flatShading)}),o.add($);let b=new Set(o.children);V=ge(o,c.vegetation,i,innerWidth<700),_e(o,c.ground_cover||[],innerWidth<700),o.children.filter(e=>!b.has(e)).forEach(e=>d.add(e)),o.add(d),H=be(o,g,U,innerWidth<700);let x=X.material;x.map=r,x.color.set(`#b0c291`),L(X,36),t.append(a.domElement)}catch(e){throw Ne(),e}let Pe=[new O(480,390,910),new O(230,260,645),new O(-240,235,420),new O(320,310,240),new O(490,245,-10)],Fe=[new O(-150,6,385),new O(-110,9,305),new O(-125,13,125),new O(110,21,-40),new O(200,22,-145)],Ie=new ae(Pe,!1,`catmullrom`,.15),Le=new ae(Fe,!1,`catmullrom`,.15),Re=()=>{if(Q)return;a.setSize(t.clientWidth,t.clientHeight);let e=t.clientWidth/t.clientHeight;p.aspect=e,p.fov=A?t.clientWidth<700?78:68:t.clientWidth<700?66:48,p.near=A?.18:.6,p.far=A?4e3:16e3,p.updateProjectionMatrix();let n=Math.max(1360,1280/e);g.left=-n*e/2,g.right=n*e/2,g.top=n/2,g.bottom=-n/2,g.updateProjectionMatrix()};Re();let ze=!1,Be=[{position:[355,270,610],target:[35,14,75]},{position:[-300,64,555],target:[-115,9,300]},{position:[313,55,15],target:[272,20,-8]},{position:[330,27,-66],target:[261,16,-34]},{position:[0,1490,.2],target:[0,12,0]},{position:[231,31,-174],target:[218,19,-201]},{position:[112,45,-31],target:[90,18,-61]}],Ve=e=>{A=!0,T=p,E.enabled=!1,j?.enable(!0),j?.enter(e),X.visible=!0,R.visible=!0,o.background.set(`#bacac3`),o.fog instanceof v&&(o.fog.density=58e-5),Z.uFog.value=58e-5,Re(),I(!0),K.set(1/0,0,0),Y.set(1/0,0,0),t.dataset.navigation=`walking`};return{resize:Re,walkTo:Ve,walkInput(e,t){j?.hold(e,t)},walkStep(e){j?.step(e)},walkState(){return A?j?.state():void 0},navigation(){return se},interactive(e){k=e,E.enabled=e&&!A},vegetation(e){d.visible=e,a.shadowMap.needsUpdate=!0},view(e){if(e===7){Ve(0);return}A=!1,Z.uReflect.value=0,j?.enable(!1),E.enabled=k,Re(),I(!0),t.dataset.navigation=`orbit`;let n=Be[e]||Be[0];T=e===4?g:p,E.object=T,e===4&&(g.zoom=1,g.updateProjectionMatrix()),T.position.fromArray(n.position),E.target.fromArray(n.target),Y.set(1/0,0,0),X.visible=e!==4,R.visible=e!==4,o.background.set(e===4?`#26382b`:`#bacac3`),o.fog instanceof v&&(o.fog.density=e===4?15e-5:58e-5),Z.uFog.value=e===4?15e-5:58e-5,E.update()},zoom(e){T instanceof r?(T.zoom=m.clamp(T.zoom/e,E.minZoom,E.maxZoom),T.updateProjectionMatrix()):T.position.sub(E.target).multiplyScalar(e).add(E.target),E.update()},orbit(e){let t=T.position.clone().sub(E.target);t.applyAxisAngle(new O(0,1,0),e),T.position.copy(E.target).add(t),E.update()},evening(e){F.color.set(e?`#ffd09c`:`#fff3dd`),F.intensity=e?1.9:2.35,N.set(-720,e?380:1100,-280),I(!0),Z.uSunDirection.value.copy(N).normalize(),Z.uSunColor.value.copy(F.color),K.set(1/0,0,0),Y.set(1/0,0,0),R.material.uniforms.sunPosition.value.copy(N),P.intensity=e?.65:.85,o.backgroundIntensity=e?.55:.8,o.environmentIntensity=e?.48:.65,a.shadowMap.needsUpdate=!0},draw(e,n){if(Q)return;let r=M?Math.max(0,n-M):0;M=n;let i=m.clamp((e-.08)/.92,0,1);if(k&&A?(j?.tick(r),I()):k?(E.target.x=m.clamp(E.target.x,-480,480),E.target.z=m.clamp(E.target.z,-520,520),E.target.y=m.clamp(E.target.y,5,50),E.target.y=Math.max(E.target.y,U(E.target.x,E.target.z)+1),E.update(),T.position.y=Math.max(T.position.y,U(T.position.x,T.position.z)+2.2)):(T.position.copy(Ie.getPoint(i)),T.lookAt(Le.getPoint(i))),Z.uTime.value=n,V?.update(n),H?.update(T,A,n),k&&n-De>1.5&&T instanceof x&&Y.distanceToSquared(T.position)>225){De=n,Y.copy(T.position),Ee.position.copy(T.position),q.forEach(e=>e.visible=!1);let e=Z.uReflect.value;Z.uReflect.value=0;try{Ee.update(a,o)}finally{q.forEach(e=>e.visible=!0),Z.uReflect.value=e}q.forEach(e=>{let t=e.material;t.envMap!==J.texture&&(t.envMap=J.texture,t.needsUpdate=!0)})}let s=A&&T.position.z>215&&T.position.z<595&&T.position.x<135;if(s&&n-Oe>.1&&(K.distanceToSquared(T.position)>.0025||we.angleTo(T.quaternion)>.003)){G.copy(p),G.position.y=8-T.position.y;let e=T.getWorldDirection(new O);e.y=-e.y,G.up.set(0,-1,0),G.lookAt(G.position.clone().add(e)),G.updateMatrixWorld(),Ce.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1).multiply(G.projectionMatrix).multiply(G.matrixWorldInverse),Te.forEach(e=>e.visible=!1),a.clippingPlanes=[new l(new O(0,1,0),-4.02)],a.setRenderTarget(W),a.render(o,G),a.setRenderTarget(null),a.clippingPlanes=[],Te.forEach(e=>e.visible=!0),K.copy(T.position),we.copy(T.quaternion),Oe=n}Z.uReflect.value=+!!s,a.render(o,T),ze||(a.shadowMap.autoUpdate=!1,ze=!0,t.dataset.loaded=`true`)},dispose:Ne}}export{Ce as createCinematicScene};