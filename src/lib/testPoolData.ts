// Example results from test pool video analysis
export const testPoolData = {
  results: {
    labels: [
      { name: 'Pool Table', confidence: 0.98 },
      { name: 'Cue Stick', confidence: 0.95 },
    ],
    objects: [
      {
        name: 'Cue Ball',
        confidence: 0.92,
        frames: [
          {
            timeOffset: { low: 0, high: 0, unsigned: true },
            boundingBox: { left: 0.1, top: 0.2, right: 0.3, bottom: 0.4 },
          },
        ],
      },
    ],
    persons: [
      {
        tracks: [
          {
            confidence: 0.85,
            frames: [
              {
                timeOffset: { low: 0, high: 0, unsigned: true },
                boundingBox: { left: 0.1, top: 0.2, right: 0.3, bottom: 0.4 },
                landmarks: [{ name: 'Nose', point: { x: 0.5, y: 0.5, z: 0 } }],
              },
            ],
          },
        ],
      },
    ],
    shots: [
      {
        startTime: { low: 0, high: 0, unsigned: true },
        endTime: { low: 10, high: 0, unsigned: true },
      },
      {
        startTime: { low: 10, high: 0, unsigned: true },
        endTime: { low: 20, high: 0, unsigned: true },
      },
    ],
  },
}

/*
export const testPoolData = {
  results: {
    labels: [
      {
        name: 'recreation room',
        confidence: 0.5079548954963684,
      },
      {
        name: 'table',
        confidence: 0.6965571641921997,
      },
      {
        name: 'billiard table',
        confidence: 0.9329010248184204,
      },
      {
        name: 'pool',
        confidence: 0.9712169766426086,
      },
      {
        name: 'billiard ball',
        confidence: 0.5076677799224854,
      },
      {
        name: 'games',
        confidence: 0.3306938707828522,
      },
      {
        name: 'flooring',
        confidence: 0.3911329507827759,
      },
      {
        name: 'cue sports',
        confidence: 0.8774949312210083,
      },
      {
        name: 'sports',
        confidence: 0.5220340490341187,
      },
      {
        name: 'billiard room',
        confidence: 0.6547753214836121,
      },
      {
        name: 'indoor games and sports',
        confidence: 0.5741894841194153,
      },
      {
        name: 'floor',
        confidence: 0.6784307956695557,
      },
      {
        name: 'pocket billiards',
        confidence: 0.3385283648967743,
      },
      {
        name: 'furniture',
        confidence: 0.4063122570514679,
      },
    ],
    objects: [
      {
        name: 'person',
        confidence: 0.9064909815788269,
        frames: [
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5032229423522949,
              top: 0.3825693130493164,
              right: 1,
              bottom: 1,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5037029385566711,
              top: 0.38333213329315186,
              right: 1,
              bottom: 1.0005199909210205,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5037040114402771,
              top: 0.383334219455719,
              right: 1.0000003576278687,
              bottom: 1.0005217790603638,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5037039518356323,
              top: 0.38290420174598694,
              right: 1.000000238418579,
              bottom: 1.0000916719436646,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5129359364509583,
              top: 0.3835544288158417,
              right: 0.9988101720809937,
              bottom: 0.9908491373062134,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5150282382965088,
              top: 0.3814678192138672,
              right: 0.9994221925735474,
              bottom: 0.9878049492835999,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5166926980018616,
              top: 0.3782711327075958,
              right: 1.0009632110595703,
              bottom: 0.9845284223556519,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5205135941505432,
              top: 0.3714728057384491,
              right: 1.0047738552093506,
              bottom: 0.9777233600616455,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5656734108924866,
              top: 0.36895552277565,
              right: 0.9916685819625854,
              bottom: 0.9825485944747925,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5813347101211548,
              top: 0.3643741011619568,
              right: 1.0021785497665405,
              bottom: 0.9783970713615417,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5909974575042725,
              top: 0.36197516322135925,
              right: 1.011407494544983,
              bottom: 0.9760342836380005,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5931943655014038,
              top: 0.363294780254364,
              right: 1.0135680437088013,
              bottom: 0.9773569703102112,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6647907495498657,
              top: 0.3448617458343506,
              right: 0.9901034832000732,
              bottom: 0.9945332407951355,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6799012422561646,
              top: 0.3337782025337219,
              right: 0.9964586496353149,
              bottom: 0.9861321449279785,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6849896907806396,
              top: 0.337941974401474,
              right: 0.987227201461792,
              bottom: 0.9618972539901733,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6698591709136963,
              top: 0.3376569449901581,
              right: 0.9708935022354126,
              bottom: 0.9592260122299194,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5333389043807983,
              top: 0.30734220147132874,
              right: 1.0211122035980225,
              bottom: 0.9768115282058716,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.49372759461402893,
              top: 0.3026030361652374,
              right: 0.9969115257263184,
              bottom: 0.9757001399993896,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.47503718733787537,
              top: 0.30133697390556335,
              right: 0.9795454740524292,
              bottom: 0.9747458696365356,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.46124833822250366,
              top: 0.297495037317276,
              right: 0.9658677577972412,
              bottom: 0.9709300994873047,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.31266582012176514,
              top: 0.2858039140701294,
              right: 1.0119140148162842,
              bottom: 0.9765142202377319,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.25940951704978943,
              top: 0.2856256365776062,
              right: 0.9745383262634277,
              bottom: 0.9776827096939087,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18950887024402618,
              top: 0.2885533571243286,
              right: 0.9060460329055786,
              bottom: 0.980729877948761,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08826211839914322,
              top: 0.28800931572914124,
              right: 0.8049179315567017,
              bottom: 0.9801958799362183,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09027896076440811,
              top: 0.2873537838459015,
              right: 0.8082298636436462,
              bottom: 0.9938114881515503,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0778573527932167,
              top: 0.2934941351413727,
              right: 0.7954800128936768,
              bottom: 1.0007158517837524,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06160089373588562,
              top: 0.29600146412849426,
              right: 0.77919602394104,
              bottom: 1.0032873153686523,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0516386479139328,
              top: 0.2968880534172058,
              right: 0.7692314982414246,
              bottom: 1.0041792392730713,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02485758811235428,
              top: 0.29998621344566345,
              right: 0.7424501776695251,
              bottom: 1.0072778463363647,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0038195024244487286,
              top: 0.3014981746673584,
              right: 0.7137730717658997,
              bottom: 1.0087897777557373,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.015180652029812336,
              top: 0.31848058104515076,
              right: 0.6710253357887268,
              bottom: 0.9947566986083984,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07101202011108398,
              top: 0.3916742503643036,
              right: 0.3082703948020935,
              bottom: 0.9130059480667114,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010922974906861782,
              top: 0.40086811780929565,
              right: 0.168549582362175,
              bottom: 0.9426441788673401,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.024391014128923416,
              top: 0.39260727167129517,
              right: 0.11216525733470917,
              bottom: 0.937195360660553,
            },
          },
        ],
      },
      {
        name: 'ceiling fan',
        confidence: 0.7957356572151184,
        frames: [
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14993104338645935,
              right: 0.6941424608230591,
              bottom: 0.10660383105278015,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15182586014270782,
              top: 0.0008951614727266133,
              right: 0.6966549754142761,
              bottom: 0.10580931603908539,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17287060618400574,
              top: 0.0010351670207455754,
              right: 0.696513295173645,
              bottom: 0.10635467618703842,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1441684365272522,
              top: 0.001038583111949265,
              right: 0.7001178860664368,
              bottom: 0.1048315241932869,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13598671555519104,
              top: 0.0005947300815023482,
              right: 0.696304440498352,
              bottom: 0.1048680990934372,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13917964696884155,
              top: 0.0005923109129071236,
              right: 0.6920216679573059,
              bottom: 0.10384920984506607,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1325012445449829,
              top: 0.0005751966964453459,
              right: 0.693421483039856,
              bottom: 0.10351934283971786,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13512305915355682,
              top: 0.00011922769772354513,
              right: 0.6925477981567383,
              bottom: 0.10438781976699829,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14971819519996643,
              top: 0.0005277786985971034,
              right: 0.6893638372421265,
              bottom: 0.10523194819688797,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15096662938594818,
              top: 0.000654644041787833,
              right: 0.6924687623977661,
              bottom: 0.10650278627872467,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14818741381168365,
              top: 0.0005698320455849171,
              right: 0.6940157413482666,
              bottom: 0.10763475298881531,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1572776883840561,
              top: 0.001251847017556429,
              right: 0.692038357257843,
              bottom: 0.10718944668769836,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1604548841714859,
              top: 0.0012074664700776339,
              right: 0.6923459768295288,
              bottom: 0.10619251430034637,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14505966007709503,
              top: 0.00001163353408628609,
              right: 0.7004942297935486,
              bottom: 0.10764022916555405,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13931623101234436,
              top: 0.0019236219814047217,
              right: 0.6977880001068115,
              bottom: 0.1018948033452034,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10446419566869736,
              top: -0.003389319172129035,
              right: 0.7045954465866089,
              bottom: 0.1157560721039772,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08919169008731842,
              top: 0.00253159343264997,
              right: 0.7024285197257996,
              bottom: 0.1055094450712204,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14362050592899323,
              top: 0.0004928763955831528,
              right: 0.6779727339744568,
              bottom: 0.10704327374696732,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1652054637670517,
              top: 0.001150342170149088,
              right: 0.6863219141960144,
              bottom: 0.10263046622276306,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.26360130310058594,
              top: 0.0012554996646940708,
              right: 0.6799817085266113,
              bottom: 0.1026933342218399,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.30085325241088867,
              top: 0.0022913473658263683,
              right: 0.7012628316879272,
              bottom: 0.09885398298501968,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21368151903152466,
              top: -0.0006699529476463795,
              right: 0.7278404235839844,
              bottom: 0.10327177494764328,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.174233540892601,
              top: -0.0011301337508484721,
              right: 0.7269938588142395,
              bottom: 0.10527504235506058,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16745324432849884,
              top: -0.0003276444913353771,
              right: 0.7056239247322083,
              bottom: 0.10537067800760269,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11047301441431046,
              top: -0.001352623337879777,
              right: 0.7157935500144958,
              bottom: 0.11079322546720505,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14131984114646912,
              top: 0.001507213106378913,
              right: 0.6830116510391235,
              bottom: 0.10713578760623932,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15699206292629242,
              top: 0.0007878337637521327,
              right: 0.6826560497283936,
              bottom: 0.10696559399366379,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16918177902698517,
              top: 0.0013745102332904935,
              right: 0.686786413192749,
              bottom: 0.10451806336641312,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16332797706127167,
              top: 0.0007429736433550715,
              right: 0.6928612589836121,
              bottom: 0.10611039400100708,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1637822389602661,
              top: 0.0008607969502918422,
              right: 0.6928187012672424,
              bottom: 0.10713755339384079,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15316973626613617,
              top: 0.0008525174343958497,
              right: 0.6967824101448059,
              bottom: 0.10773544013500214,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13733737170696259,
              top: 0.0007673894288018346,
              right: 0.7003600001335144,
              bottom: 0.10724612325429916,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1429438591003418,
              top: 0.000992535729892552,
              right: 0.693394124507904,
              bottom: 0.10639169812202454,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13455118238925934,
              top: 0.0007823975756764412,
              right: 0.6955098509788513,
              bottom: 0.10566157847642899,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1404585838317871,
              top: 0.0008752832654863596,
              right: 0.6910607218742371,
              bottom: 0.10439202189445496,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12801779806613922,
              top: 0.00002438440060359426,
              right: 0.6965228915214539,
              bottom: 0.10499536991119385,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13470964133739471,
              top: 0.0011016279458999634,
              right: 0.6936561465263367,
              bottom: 0.10243289172649384,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14485500752925873,
              top: 0.0006159298936836421,
              right: 0.6917292475700378,
              bottom: 0.10268803685903549,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13586030900478363,
              top: 0.0004357063153292984,
              right: 0.6987358331680298,
              bottom: 0.10287152230739594,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16537828743457794,
              top: 0.0002654115960467607,
              right: 0.6875776648521423,
              bottom: 0.10467478632926941,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14302115142345428,
              top: 0.00013435752771329135,
              right: 0.700498104095459,
              bottom: 0.10554304718971252,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14741849899291992,
              top: 0.0009398402762599289,
              right: 0.6958164572715759,
              bottom: 0.10489990562200546,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.153058722615242,
              top: 0.0009536002762615681,
              right: 0.6925843954086304,
              bottom: 0.10455397516489029,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1424141526222229,
              top: 0.001486105378717184,
              right: 0.6968160271644592,
              bottom: 0.10220617055892944,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14658711850643158,
              top: 0.00023185487953014672,
              right: 0.694385290145874,
              bottom: 0.1029079332947731,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14817437529563904,
              top: 0.0006694697658531368,
              right: 0.6936119794845581,
              bottom: 0.10232176631689072,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14846569299697876,
              top: 0.00008925986912799999,
              right: 0.6952342987060547,
              bottom: 0.1033409833908081,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15419451892375946,
              top: -0.00047546744463033974,
              right: 0.691301703453064,
              bottom: 0.1063474491238594,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11444386839866638,
              top: -0.0003673001192510128,
              right: 0.7088747024536133,
              bottom: 0.10826494544744492,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14387543499469757,
              top: 0.0018068887293338776,
              right: 0.6868758201599121,
              bottom: 0.10543408989906311,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15887223184108734,
              top: 0.0013173636980354786,
              right: 0.6873719096183777,
              bottom: 0.10578235983848572,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16185778379440308,
              top: 0.0016539777861908078,
              right: 0.6937152147293091,
              bottom: 0.10281307995319366,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15107929706573486,
              top: 0.0003949117672163993,
              right: 0.6999434232711792,
              bottom: 0.10284175723791122,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15437214076519012,
              top: 0.00033278067712672055,
              right: 0.6958264708518982,
              bottom: 0.10218296945095062,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14817361533641815,
              top: 0.0004628110327757895,
              right: 0.6982166767120361,
              bottom: 0.10084647685289383,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1454053521156311,
              top: 0.00034604675602167845,
              right: 0.697571337223053,
              bottom: 0.10087447613477707,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15418268740177155,
              top: 0.00022739336418453604,
              right: 0.6933496594429016,
              bottom: 0.1009967103600502,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15606790781021118,
              top: -0.00028695687069557607,
              right: 0.6932632327079773,
              bottom: 0.10330040007829666,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1619900017976761,
              top: 0.0005306632956489921,
              right: 0.6932641267776489,
              bottom: 0.10175507515668869,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15651409327983856,
              top: 0.0004767020873259753,
              right: 0.6957821846008301,
              bottom: 0.10173463821411133,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16738703846931458,
              top: 0.00023794938169885427,
              right: 0.6911811828613281,
              bottom: 0.1028173640370369,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16557590663433075,
              top: 0.0005000239470973611,
              right: 0.693800687789917,
              bottom: 0.10277946293354034,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17527848482131958,
              top: 0.0010702366707846522,
              right: 0.6900390386581421,
              bottom: 0.10105980187654495,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16826577484607697,
              top: 0.0008556561078876257,
              right: 0.6957541704177856,
              bottom: 0.1009756401181221,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1769266426563263,
              top: -0.0004020571941509843,
              right: 0.6926220655441284,
              bottom: 0.1032811775803566,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17563728988170624,
              top: 0.00032072982867248356,
              right: 0.6940591335296631,
              bottom: 0.10368645936250687,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16482853889465332,
              top: 0.001198590500280261,
              right: 0.6979923248291016,
              bottom: 0.10110360383987427,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15113738179206848,
              top: 0.000032787531381472945,
              right: 0.6989438533782959,
              bottom: 0.10268958657979965,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1595000922679901,
              top: 0.0002743407676462084,
              right: 0.6912868022918701,
              bottom: 0.10271739214658737,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15784448385238647,
              top: 0.0005274014547467232,
              right: 0.6942054629325867,
              bottom: 0.10099974274635315,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16090351343154907,
              top: 0.00021164395730011165,
              right: 0.6930912137031555,
              bottom: 0.10114404559135437,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15852303802967072,
              top: -0.00004284363240003586,
              right: 0.6953015327453613,
              bottom: 0.10198497027158737,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1616113781929016,
              top: 0.00016186943685170263,
              right: 0.6925970911979675,
              bottom: 0.10128697007894516,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16020409762859344,
              top: -0.000002819957671817974,
              right: 0.6946698427200317,
              bottom: 0.10191171616315842,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1645916849374771,
              top: 0.00005609786603599787,
              right: 0.6944295167922974,
              bottom: 0.1030869111418724,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16035962104797363,
              top: 0.0003446756745688617,
              right: 0.6969476938247681,
              bottom: 0.10281351208686829,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14772048592567444,
              top: 0.0005768226110376418,
              right: 0.6993919610977173,
              bottom: 0.10134319216012955,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15542210638523102,
              top: 0.00014448832371272147,
              right: 0.6937968730926514,
              bottom: 0.10209575295448303,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1640682965517044,
              top: 0.00008757723844610155,
              right: 0.6902379989624023,
              bottom: 0.1031157597899437,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14865915477275848,
              top: 0.0006972738774493337,
              right: 0.6966272592544556,
              bottom: 0.10152452439069748,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14743508398532867,
              top: 0.00018926657503470778,
              right: 0.6947696805000305,
              bottom: 0.10150295495986938,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1470954716205597,
              top: -0.000031361378205474466,
              right: 0.6931681632995605,
              bottom: 0.10196922719478607,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15063327550888062,
              top: 0.0005561501020565629,
              right: 0.6923333406448364,
              bottom: 0.10153462737798691,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.151358500123024,
              top: 0.00008714105206308886,
              right: 0.6937271356582642,
              bottom: 0.10317597538232803,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17627421021461487,
              top: 0.000715858768671751,
              right: 0.6859927177429199,
              bottom: 0.10291759669780731,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1781996637582779,
              top: 0.0007435765000991523,
              right: 0.6931414604187012,
              bottom: 0.1031934842467308,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.175969660282135,
              top: 0.00047361489851027727,
              right: 0.6950658559799194,
              bottom: 0.10328621417284012,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16355657577514648,
              top: 0.0009656646871007979,
              right: 0.6992080807685852,
              bottom: 0.1015547662973404,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18202809989452362,
              top: 0.00005381429218687117,
              right: 0.6908156871795654,
              bottom: 0.1031561940908432,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16425921022891998,
              top: 0.0007092265295796096,
              right: 0.6993364691734314,
              bottom: 0.10174030810594559,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1561087816953659,
              top: 0.0003752124321181327,
              right: 0.6982892155647278,
              bottom: 0.10200686752796173,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15640294551849365,
              top: 0.0002973155933432281,
              right: 0.6946516633033752,
              bottom: 0.10166525840759277,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1665676236152649,
              top: 0.00041542391409166157,
              right: 0.6912979483604431,
              bottom: 0.10135089606046677,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15313884615898132,
              top: 0.00004215484659653157,
              right: 0.6967372894287109,
              bottom: 0.10141970217227936,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14228421449661255,
              top: 0.00031000925810076296,
              right: 0.6966726183891296,
              bottom: 0.09999087452888489,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1489543467760086,
              top: 0.00029477907810360193,
              right: 0.6907348036766052,
              bottom: 0.09980755299329758,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15352009236812592,
              top: 0.00020387294352985919,
              right: 0.6937713623046875,
              bottom: 0.09998837113380432,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15878209471702576,
              top: 0.0005853939219377935,
              right: 0.6925156116485596,
              bottom: 0.10081149637699127,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1612432599067688,
              top: 0.00008200634329114109,
              right: 0.6940903067588806,
              bottom: 0.10363922268152237,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1480792909860611,
              top: 0.0007680379203520715,
              right: 0.6968620419502258,
              bottom: 0.10259716957807541,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1531362384557724,
              top: 0.0009389201295562088,
              right: 0.692899227142334,
              bottom: 0.10240347683429718,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15526430308818817,
              top: 0.0005343500524759293,
              right: 0.6927260160446167,
              bottom: 0.1037779152393341,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14802390336990356,
              top: 0.0011414061300456524,
              right: 0.6970366835594177,
              bottom: 0.10236532241106033,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13901720941066742,
              top: -0.0000018423329493089113,
              right: 0.6986250877380371,
              bottom: 0.10446321219205856,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14583612978458405,
              top: 0.0006122763152234256,
              right: 0.6922615170478821,
              bottom: 0.10390712320804596,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14113815128803253,
              top: 0.0009306744323112071,
              right: 0.6950092315673828,
              bottom: 0.10259059816598892,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14090825617313385,
              top: 0.0005014118505641818,
              right: 0.6947227120399475,
              bottom: 0.10346384346485138,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15085956454277039,
              top: 0.0005683556664735079,
              right: 0.6915934085845947,
              bottom: 0.1039646565914154,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15153272449970245,
              top: 0.001031662686727941,
              right: 0.6936114430427551,
              bottom: 0.10316763818264008,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15188142657279968,
              top: 0.000793018436525017,
              right: 0.6950995922088623,
              bottom: 0.10368110984563828,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15005968511104584,
              top: 0.0006609488627873361,
              right: 0.6955523490905762,
              bottom: 0.10360151529312134,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15310852229595184,
              top: 0.0008098983089439571,
              right: 0.6948543190956116,
              bottom: 0.10404141247272491,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15176358819007874,
              top: 0.0008729977998882532,
              right: 0.6952985525131226,
              bottom: 0.10389242321252823,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14749082922935486,
              top: 0.0008177434792742133,
              right: 0.697043776512146,
              bottom: 0.10276123881340027,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1534430980682373,
              top: 0.00039618543814867735,
              right: 0.6927554607391357,
              bottom: 0.103213369846344,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14459247887134552,
              top: 0.0006383370491676033,
              right: 0.694337785243988,
              bottom: 0.10308194905519485,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15619246661663055,
              top: 0.0003167521208524704,
              right: 0.6904844641685486,
              bottom: 0.10446592420339584,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14203692972660065,
              top: 0.0002883088600356132,
              right: 0.6965075731277466,
              bottom: 0.10440278798341751,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10958003997802734,
              top: -0.0006847024196758866,
              right: 0.7095796465873718,
              bottom: 0.10755792260169983,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1375531554222107,
              top: 0.001398622989654541,
              right: 0.68883216381073,
              bottom: 0.10369512438774109,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14425252377986908,
              top: 0.000596837024204433,
              right: 0.6894567012786865,
              bottom: 0.10481305420398712,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13776059448719025,
              top: 0.0009461530135013163,
              right: 0.696235179901123,
              bottom: 0.10334069281816483,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15854987502098083,
              top: 0.000608253525570035,
              right: 0.6897828578948975,
              bottom: 0.10436027497053146,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15689121186733246,
              top: 0.0010512524750083685,
              right: 0.6950361728668213,
              bottom: 0.10305243730545044,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14597193896770477,
              top: 0.001106465351767838,
              right: 0.699942946434021,
              bottom: 0.10194436460733414,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15005692839622498,
              top: 0.0003238764184061438,
              right: 0.6952093839645386,
              bottom: 0.10279202461242676,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1544327288866043,
              top: 0.0003316384681966156,
              right: 0.6928601861000061,
              bottom: 0.10293569415807724,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16433832049369812,
              top: 0.00018997573351953179,
              right: 0.6908307075500488,
              bottom: 0.10453516244888306,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1402747631072998,
              top: 0.0010061177890747786,
              right: 0.7021012306213379,
              bottom: 0.10109850019216537,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1525726467370987,
              top: 0.0005740413325838745,
              right: 0.6932762265205383,
              bottom: 0.1011565774679184,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1503387838602066,
              top: -0.00020600302377715707,
              right: 0.6957271099090576,
              bottom: 0.1028626337647438,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14118888974189758,
              top: 0.00030235585290938616,
              right: 0.6983779668807983,
              bottom: 0.10180767625570297,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14976097643375397,
              top: 0.0004534459440037608,
              right: 0.6927087306976318,
              bottom: 0.10149752348661423,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14308343827724457,
              top: 0.00040654573240317404,
              right: 0.695551335811615,
              bottom: 0.10138241946697235,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11600854992866516,
              top: -0.0011840604711323977,
              right: 0.7064142227172852,
              bottom: 0.1063133254647255,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1397053599357605,
              top: 0.0007693013758398592,
              right: 0.6900057196617126,
              bottom: 0.10461035370826721,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1650688350200653,
              top: 0.0015360109973698854,
              right: 0.6871458292007446,
              bottom: 0.10327962040901184,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1720789670944214,
              top: 0.0012985332868993282,
              right: 0.6913223266601562,
              bottom: 0.10335154086351395,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15811677277088165,
              top: 0.0009491012315265834,
              right: 0.6989920139312744,
              bottom: 0.10326018929481506,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15425945818424225,
              top: 0.0005689551471732557,
              right: 0.6981913447380066,
              bottom: 0.1036531999707222,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16107691824436188,
              top: 0.0007049402920529246,
              right: 0.6935501098632812,
              bottom: 0.10411328822374344,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15791381895542145,
              top: 0.001156547456048429,
              right: 0.6937151551246643,
              bottom: 0.10398004949092865,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16266149282455444,
              top: 0.0004501847142819315,
              right: 0.6908244490623474,
              bottom: 0.10517878085374832,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16860322654247284,
              top: 0.0008296084706671536,
              right: 0.6918960213661194,
              bottom: 0.1047176867723465,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1843598335981369,
              top: 0.0006434810347855091,
              right: 0.6868524551391602,
              bottom: 0.105289526283741,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17845472693443298,
              top: 0.0011115868110209703,
              right: 0.6930190324783325,
              bottom: 0.10514084994792938,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17628832161426544,
              top: 0.001327505917288363,
              right: 0.6954658627510071,
              bottom: 0.10470583289861679,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16116245090961456,
              top: 0.0003978564345743507,
              right: 0.7001263499259949,
              bottom: 0.10637959837913513,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18016621470451355,
              top: 0.0009295624331571162,
              right: 0.6887173652648926,
              bottom: 0.10584219545125961,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16298748552799225,
              top: 0.0010289627825841308,
              right: 0.6970217823982239,
              bottom: 0.10383827984333038,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16012977063655853,
              top: 0.0005825931439176202,
              right: 0.6957674622535706,
              bottom: 0.10390042513608932,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1588524729013443,
              top: 0.00011193500540684909,
              right: 0.6950985789299011,
              bottom: 0.10503145307302475,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18293370306491852,
              top: 0.0011177408741787076,
              right: 0.687049150466919,
              bottom: 0.10292737931013107,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1560882329940796,
              top: 0.0005875919596292078,
              right: 0.699483335018158,
              bottom: 0.10325975716114044,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15858039259910583,
              top: 0.0000644103201921098,
              right: 0.6928505897521973,
              bottom: 0.10453186184167862,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17057277262210846,
              top: 0.0005803770036436617,
              right: 0.6876031756401062,
              bottom: 0.10447771102190018,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17084726691246033,
              top: 0.0009482947061769664,
              right: 0.6890876293182373,
              bottom: 0.10410577058792114,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17710505425930023,
              top: 0.0006581322522833943,
              right: 0.6898950934410095,
              bottom: 0.1056911051273346,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.168791726231575,
              top: 0.0011305260704830289,
              right: 0.6928532719612122,
              bottom: 0.10525186359882355,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17564766108989716,
              top: 0.0013530213618651032,
              right: 0.6909716129302979,
              bottom: 0.1045583039522171,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14872637391090393,
              top: 0.0005677446606568992,
              right: 0.6993417739868164,
              bottom: 0.1048969179391861,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16461995244026184,
              top: 0.00042517943074926734,
              right: 0.690392017364502,
              bottom: 0.10423633456230164,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14776214957237244,
              top: 0.00022415563580580056,
              right: 0.6955194473266602,
              bottom: 0.10567421466112137,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16062739491462708,
              top: 0.0009454174432903528,
              right: 0.6893185377120972,
              bottom: 0.10419847816228867,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16201002895832062,
              top: 0.0004795524582732469,
              right: 0.6917278170585632,
              bottom: 0.10369560867547989,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14296159148216248,
              top: 0.00042923889122903347,
              right: 0.6985636949539185,
              bottom: 0.10317366570234299,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14773285388946533,
              top: 0.00007975509652169421,
              right: 0.6928253173828125,
              bottom: 0.10371580719947815,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13875216245651245,
              top: 0.001022119540721178,
              right: 0.6963304281234741,
              bottom: 0.10136302560567856,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16741929948329926,
              top: 0.00030313487513922155,
              right: 0.6838477849960327,
              bottom: 0.102750264108181,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.155405655503273,
              top: 0.000926287320908159,
              right: 0.6955636143684387,
              bottom: 0.10122933983802795,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1458011418581009,
              top: 0.000022943004296394065,
              right: 0.6993534564971924,
              bottom: 0.10189833492040634,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15480397641658783,
              top: 0.0002074796357192099,
              right: 0.6935513019561768,
              bottom: 0.10194752365350723,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16486535966396332,
              top: 0.000037612331652780995,
              right: 0.6895865797996521,
              bottom: 0.10370475053787231,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16024939715862274,
              top: 0.0006903372122906148,
              right: 0.6943068504333496,
              bottom: 0.10339255630970001,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1190854087471962,
              top: -0.0006166788516566157,
              right: 0.7106766700744629,
              bottom: 0.10720113664865494,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10819371789693832,
              top: -0.000618738413322717,
              right: 0.7073808908462524,
              bottom: 0.10991404950618744,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14702793955802917,
              top: 0.001886939164251089,
              right: 0.6832845211029053,
              bottom: 0.10591314733028412,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1622694730758667,
              top: 0.0010237342212349176,
              right: 0.6867269277572632,
              bottom: 0.1055101826786995,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18262739479541779,
              top: 0.0006139178294688463,
              right: 0.6874251365661621,
              bottom: 0.1053863987326622,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16934582591056824,
              top: 0.001041341689415276,
              right: 0.6976840496063232,
              bottom: 0.1028718426823616,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17025381326675415,
              top: 0.000783103343565017,
              right: 0.696946382522583,
              bottom: 0.10160477459430695,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17068052291870117,
              top: -0.00018202363571617752,
              right: 0.6957272887229919,
              bottom: 0.10323461145162582,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16270162165164948,
              top: 0.0003932797408197075,
              right: 0.6984302401542664,
              bottom: 0.1031813770532608,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15833908319473267,
              top: 0.000014681676475447603,
              right: 0.6965202689170837,
              bottom: 0.10428700596094131,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16347181797027588,
              top: 0.0004624750290531665,
              right: 0.6923877000808716,
              bottom: 0.10447248816490173,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16337524354457855,
              top: 0.0006751418695785105,
              right: 0.6931514739990234,
              bottom: 0.1049383357167244,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15606744587421417,
              top: 0.0006238397909328341,
              right: 0.6967898011207581,
              bottom: 0.10486166179180145,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1636720597743988,
              top: -0.00004486591569730081,
              right: 0.6921548843383789,
              bottom: 0.10721129179000854,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16000227630138397,
              top: 0.0017285424983128905,
              right: 0.6945785880088806,
              bottom: 0.10435005277395248,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15967734158039093,
              top: 0.0010925137903541327,
              right: 0.693254828453064,
              bottom: 0.10441498458385468,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1567842960357666,
              top: 0.001247014501132071,
              right: 0.6933547258377075,
              bottom: 0.103779636323452,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15732769668102264,
              top: 0.001309182378463447,
              right: 0.69413161277771,
              bottom: 0.10169647634029388,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16482344269752502,
              top: 0.0005476240767166018,
              right: 0.6910228729248047,
              bottom: 0.10140254348516464,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15539652109146118,
              top: 0.00021143388585187495,
              right: 0.695401132106781,
              bottom: 0.1014740839600563,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15973983705043793,
              top: -0.0002592545934021473,
              right: 0.692116379737854,
              bottom: 0.1035676896572113,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1599196195602417,
              top: 0.0005955409724265337,
              right: 0.6914563775062561,
              bottom: 0.10351356118917465,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18050169944763184,
              top: 0.0007618852541781962,
              right: 0.6851499080657959,
              bottom: 0.10537848621606827,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17073695361614227,
              top: 0.0014148418558761477,
              right: 0.6938900947570801,
              bottom: 0.1044258177280426,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16165360808372498,
              top: 0.001599026145413518,
              right: 0.6960738897323608,
              bottom: 0.10245741903781891,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16160936653614044,
              top: 0.0006191268912516534,
              right: 0.6949388980865479,
              bottom: 0.10388950258493423,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15917079150676727,
              top: 0.0008813232998363674,
              right: 0.6943215727806091,
              bottom: 0.1038515642285347,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15655983984470367,
              top: 0.0007667788886465132,
              right: 0.6941178441047668,
              bottom: 0.10436131805181503,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16390927135944366,
              top: 0.0006418822449631989,
              right: 0.6920256018638611,
              bottom: 0.10502641648054123,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1544254571199417,
              top: 0.0009834783850237727,
              right: 0.6972318291664124,
              bottom: 0.1031041368842125,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1602308750152588,
              top: 0.0006185783422552049,
              right: 0.6931937336921692,
              bottom: 0.10334326326847076,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17587333917617798,
              top: 0.0002982024452649057,
              right: 0.6885319948196411,
              bottom: 0.10441246628761292,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1841474324464798,
              top: 0.0010573093313723803,
              right: 0.6896639466285706,
              bottom: 0.10233764350414276,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17674458026885986,
              top: 0.0002759115013759583,
              right: 0.6950907707214355,
              bottom: 0.10379201173782349,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17589744925498962,
              top: 0.0007223864668048918,
              right: 0.6938462257385254,
              bottom: 0.10370099544525146,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19318729639053345,
              top: 0.002960764104500413,
              right: 0.7065002918243408,
              bottom: 0.1009075716137886,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17028595507144928,
              top: 0.0011252546682953835,
              right: 0.7082064151763916,
              bottom: 0.10274580121040344,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1656450629234314,
              top: 0.00010459061013534665,
              right: 0.7001493573188782,
              bottom: 0.10512842983007431,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16630837321281433,
              top: 0.0012218558695167303,
              right: 0.6956667900085449,
              bottom: 0.10419319570064545,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16991831362247467,
              top: 0.0006499218288809061,
              right: 0.6924184560775757,
              bottom: 0.10507269948720932,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16436992585659027,
              top: 0.0003589377156458795,
              right: 0.6937637329101562,
              bottom: 0.10572481155395508,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14746756851673126,
              top: 0.0009912662208080292,
              right: 0.6995258927345276,
              bottom: 0.10266852378845215,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1542135775089264,
              top: 0.00015453477681148797,
              right: 0.6909905672073364,
              bottom: 0.10343863815069199,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1573893427848816,
              top: 0.00017996091628447175,
              right: 0.689250111579895,
              bottom: 0.10382736474275589,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15297555923461914,
              top: 0.00018652304424904287,
              right: 0.6935229301452637,
              bottom: 0.10371151566505432,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16601237654685974,
              top: -0.00008894929487723857,
              right: 0.6890603303909302,
              bottom: 0.1044948399066925,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17542490363121033,
              top: 0.000698726624250412,
              right: 0.6884695291519165,
              bottom: 0.10311315953731537,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17722046375274658,
              top: 0.0002298916515428573,
              right: 0.6925937533378601,
              bottom: 0.1038326546549797,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1643790602684021,
              top: 0.0006502070464193821,
              right: 0.6986788511276245,
              bottom: 0.10233777016401291,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1645219624042511,
              top: 0.0007254288648255169,
              right: 0.6959419250488281,
              bottom: 0.10179880261421204,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1585323065519333,
              top: -0.00016548177518416196,
              right: 0.6945432424545288,
              bottom: 0.10343745350837708,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17223398387432098,
              top: -0.000029673346944036894,
              right: 0.6884921789169312,
              bottom: 0.10418963432312012,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15839266777038574,
              top: 0.00021977107098791748,
              right: 0.6963503956794739,
              bottom: 0.1046406552195549,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15798164904117584,
              top: 0.0005072823842056096,
              right: 0.6945546269416809,
              bottom: 0.1054791584610939,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16430160403251648,
              top: 0.0007041377248242497,
              right: 0.6905803680419922,
              bottom: 0.10475480556488037,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15662987530231476,
              top: 0.0009533586562611163,
              right: 0.6957407593727112,
              bottom: 0.10474398732185364,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11740285158157349,
              top: -0.0012283262331038713,
              right: 0.7129684090614319,
              bottom: 0.1109430268406868,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1478809267282486,
              top: 0.0016771823866292834,
              right: 0.6892887949943542,
              bottom: 0.10704813152551651,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11132057756185532,
              top: 0.00013089006824884564,
              right: 0.7090678215026855,
              bottom: 0.10934392362833023,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15673218667507172,
              top: 0.0017541814595460892,
              right: 0.68492591381073,
              bottom: 0.10595674067735672,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15074582397937775,
              top: 0.00044471133151091635,
              right: 0.6935592889785767,
              bottom: 0.10626409202814102,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1386173814535141,
              top: 0.0009019661229103804,
              right: 0.6994277834892273,
              bottom: 0.10258858650922775,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.146443173289299,
              top: 0.000056220331316580996,
              right: 0.6938028335571289,
              bottom: 0.10205572843551636,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16014495491981506,
              top: -0.00038466425030492246,
              right: 0.6920180320739746,
              bottom: 0.10383115708827972,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1653604507446289,
              top: 0.00004745180922327563,
              right: 0.6934503316879272,
              bottom: 0.1053270697593689,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1673397421836853,
              top: 0.0009126418153755367,
              right: 0.6965035200119019,
              bottom: 0.1040024682879448,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17471937835216522,
              top: 0.0008098831167444587,
              right: 0.695336639881134,
              bottom: 0.10460656136274338,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1623602956533432,
              top: 0.0011835377663373947,
              right: 0.699938178062439,
              bottom: 0.10386864095926285,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14910031855106354,
              top: 0.0010291032958775759,
              right: 0.7007163763046265,
              bottom: 0.1042066365480423,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1535744071006775,
              top: 0.0007983017712831497,
              right: 0.6953209042549133,
              bottom: 0.10378991067409515,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1578267514705658,
              top: 0.0008679861784912646,
              right: 0.6926997900009155,
              bottom: 0.10246965289115906,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1676274985074997,
              top: 0.0014268254162743688,
              right: 0.7104330062866211,
              bottom: 0.10226191580295563,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16288737952709198,
              top: 0.0007926135440357029,
              right: 0.7053816318511963,
              bottom: 0.10163436084985733,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17298094928264618,
              top: -0.00020327619859017432,
              right: 0.695060670375824,
              bottom: 0.10471975803375244,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16008669137954712,
              top: 0.0005988414632156491,
              right: 0.6976504921913147,
              bottom: 0.10425050556659698,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1516328752040863,
              top: 0.0005276404554024339,
              right: 0.6980476379394531,
              bottom: 0.10340190678834915,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14720764756202698,
              top: 0.0005985231837257743,
              right: 0.6947489976882935,
              bottom: 0.10301782935857773,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.148149311542511,
              top: 0.0001572258915985003,
              right: 0.6930773854255676,
              bottom: 0.10398156195878983,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15705960988998413,
              top: 0.00024675187887623906,
              right: 0.6896504759788513,
              bottom: 0.10388413816690445,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16017155349254608,
              top: -0.00003669117722893134,
              right: 0.690390944480896,
              bottom: 0.10555612295866013,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15187294781208038,
              top: 0.0010396955767646432,
              right: 0.6968860626220703,
              bottom: 0.10316199064254761,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15303334593772888,
              top: 0.00011212367826374248,
              right: 0.6944009065628052,
              bottom: 0.10457558184862137,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14491188526153564,
              top: 0.0003910880477633327,
              right: 0.6969255208969116,
              bottom: 0.10399264097213745,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1476515382528305,
              top: 0.00021326648129615933,
              right: 0.6934323310852051,
              bottom: 0.10358566790819168,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15646618604660034,
              top: 0.00012271504965610802,
              right: 0.6914915442466736,
              bottom: 0.10489621013402939,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15564002096652985,
              top: 0.0004455132002476603,
              right: 0.6953570246696472,
              bottom: 0.10498091578483582,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16016340255737305,
              top: 0.0010075942846015096,
              right: 0.6944643259048462,
              bottom: 0.10349085927009583,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14863260090351105,
              top: 0.0005891783512197435,
              right: 0.6997373700141907,
              bottom: 0.10305316001176834,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15539094805717468,
              top: 0.00007272390212165192,
              right: 0.6955058574676514,
              bottom: 0.1051006093621254,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15245282649993896,
              top: -0.0001758173602866009,
              right: 0.6950429081916809,
              bottom: 0.10879512131214142,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14460410177707672,
              top: 0.0020052765030413866,
              right: 0.6976160407066345,
              bottom: 0.10417447984218597,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15084949135780334,
              top: 0.0006995606236159801,
              right: 0.694975733757019,
              bottom: 0.10512962192296982,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13849350810050964,
              top: 0.0006894006510265172,
              right: 0.6984130144119263,
              bottom: 0.10354632884263992,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1389111429452896,
              top: 0.0002368025598116219,
              right: 0.6957679986953735,
              bottom: 0.10367247462272644,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14720848202705383,
              top: 0.00001508220793766668,
              right: 0.6927238702774048,
              bottom: 0.10394688695669174,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1490277647972107,
              top: 0.0003859851567540318,
              right: 0.6930553317070007,
              bottom: 0.10410100966691971,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14395269751548767,
              top: 0.0004984682309441268,
              right: 0.6952364444732666,
              bottom: 0.10457722842693329,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13853268325328827,
              top: 0.0008739024051465094,
              right: 0.6965402960777283,
              bottom: 0.10327297449111938,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15137672424316406,
              top: 0.00040460930904373527,
              right: 0.6900039911270142,
              bottom: 0.1051005870103836,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14157848060131073,
              top: 0.0016346717020496726,
              right: 0.6984726190567017,
              bottom: 0.10222241282463074,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1452411562204361,
              top: 0.0004070621798746288,
              right: 0.695244312286377,
              bottom: 0.10391832143068314,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1455570012331009,
              top: 0.0006275312043726444,
              right: 0.6947055459022522,
              bottom: 0.1033976674079895,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16300800442695618,
              top: 0.00034090422559529543,
              right: 0.6892867088317871,
              bottom: 0.10542763024568558,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15052129328250885,
              top: 0.00041499314829707146,
              right: 0.6951358318328857,
              bottom: 0.10548768192529678,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14921951293945312,
              top: 0.0005849807639606297,
              right: 0.6935797929763794,
              bottom: 0.10551700741052628,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14878062903881073,
              top: 0.0007543393294326961,
              right: 0.6932464241981506,
              bottom: 0.10560213774442673,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14654581248760223,
              top: 0.0005909429164603353,
              right: 0.693326473236084,
              bottom: 0.10546310991048813,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14219529926776886,
              top: 0.0008234363049268723,
              right: 0.6937363743782043,
              bottom: 0.1050025150179863,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1480388641357422,
              top: -0.000025817011191975325,
              right: 0.6916339993476868,
              bottom: 0.10792351514101028,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15126962959766388,
              top: 0.0013179370434954762,
              right: 0.6928739547729492,
              bottom: 0.1045210212469101,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16772200167179108,
              top: 0.0004963434766978025,
              right: 0.6886804699897766,
              bottom: 0.10629021376371384,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15400610864162445,
              top: 0.0006134771392680705,
              right: 0.6955515742301941,
              bottom: 0.10539986193180084,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14818990230560303,
              top: 0.0007412496488541365,
              right: 0.6975682973861694,
              bottom: 0.10433579981327057,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1590770035982132,
              top: 0.0003533045237418264,
              right: 0.6925815939903259,
              bottom: 0.10546509176492691,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13700154423713684,
              top: 0.0011565041495487094,
              right: 0.7009710073471069,
              bottom: 0.1028171107172966,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15914183855056763,
              top: -0.00018808226741384715,
              right: 0.6896116733551025,
              bottom: 0.10544130206108093,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17202378809452057,
              top: 0.000496113090775907,
              right: 0.6889204382896423,
              bottom: 0.10583236813545227,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16422206163406372,
              top: 0.0009478679276071489,
              right: 0.6978031396865845,
              bottom: 0.10443087667226791,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16081468760967255,
              top: 0.0006233166786842048,
              right: 0.6979740262031555,
              bottom: 0.10477777570486069,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15474869310855865,
              top: 0.00023274451086763293,
              right: 0.6980780363082886,
              bottom: 0.10624777525663376,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15724189579486847,
              top: 0.0004644712316803634,
              right: 0.6949078440666199,
              bottom: 0.10649760812520981,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14598511159420013,
              top: 0.0010744768660515547,
              right: 0.6968605518341064,
              bottom: 0.10439096391201019,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15369930863380432,
              top: 0.0008602900197729468,
              right: 0.6916465759277344,
              bottom: 0.10492651164531708,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1423315852880478,
              top: 0.0006111301481723785,
              right: 0.697354257106781,
              bottom: 0.10422439873218536,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1494903415441513,
              top: 0.00024435919476673007,
              right: 0.6927761435508728,
              bottom: 0.10545676946640015,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15064942836761475,
              top: 0.0004500184440985322,
              right: 0.6945098042488098,
              bottom: 0.1044757291674614,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14236567914485931,
              top: 0.00029621479916386306,
              right: 0.6975222229957581,
              bottom: 0.10485880821943283,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1535593569278717,
              top: 0.0003842894802801311,
              right: 0.6926919221878052,
              bottom: 0.10492357611656189,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14699658751487732,
              top: 0.0003581139899324626,
              right: 0.6967992782592773,
              bottom: 0.10565280169248581,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14592698216438293,
              top: 0.0006533879786729813,
              right: 0.6966359615325928,
              bottom: 0.10556326061487198,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15813107788562775,
              top: 0.0003568165993783623,
              right: 0.6923919916152954,
              bottom: 0.1063627228140831,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15976756811141968,
              top: 0.0003338702954351902,
              right: 0.6936861872673035,
              bottom: 0.10715877264738083,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15264707803726196,
              top: 0.0009441865840926766,
              right: 0.6968466639518738,
              bottom: 0.10464724153280258,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16696010529994965,
              top: 0.0008306209929287434,
              right: 0.6928186416625977,
              bottom: 0.1040264219045639,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1645321100950241,
              top: 0.001191397081129253,
              right: 0.6970189213752747,
              bottom: 0.10189401358366013,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16596922278404236,
              top: -0.00012299155059736222,
              right: 0.6961987018585205,
              bottom: 0.10482971370220184,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1725001335144043,
              top: 0.00035843963269144297,
              right: 0.6935161352157593,
              bottom: 0.10534514486789703,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16560141742229462,
              top: 0.0009090693201869726,
              right: 0.6975393891334534,
              bottom: 0.10531842708587646,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17373302578926086,
              top: 0.000634380558039993,
              right: 0.6927425861358643,
              bottom: 0.10639940202236176,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16651439666748047,
              top: 0.0014483574777841568,
              right: 0.6966117024421692,
              bottom: 0.10529694706201553,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1708257794380188,
              top: 0.0012991088442504406,
              right: 0.6954769492149353,
              bottom: 0.10533525049686432,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16598452627658844,
              top: 0.001288413186557591,
              right: 0.6975975036621094,
              bottom: 0.10430002212524414,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16819977760314941,
              top: 0.001491597038693726,
              right: 0.6938509345054626,
              bottom: 0.10304899513721466,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1439218819141388,
              top: 0.0010461073834449053,
              right: 0.7020655870437622,
              bottom: 0.1014689952135086,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.150759756565094,
              top: 0.0007505384273827076,
              right: 0.69551682472229,
              bottom: 0.10061081498861313,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17595405876636505,
              top: 0.0012399440165609121,
              right: 0.7037393450737,
              bottom: 0.10315050184726715,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16126716136932373,
              top: 0.0005640709423460066,
              right: 0.7041694521903992,
              bottom: 0.10287242382764816,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11651541292667389,
              top: -0.0008783094235695899,
              right: 0.7170805931091309,
              bottom: 0.10688025504350662,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14185652136802673,
              top: 0.0018122807377949357,
              right: 0.7119072675704956,
              bottom: 0.10435738414525986,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15098679065704346,
              top: 0.0013761548325419426,
              right: 0.7003461718559265,
              bottom: 0.10192819684743881,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16669350862503052,
              top: 0.0008113279473036528,
              right: 0.6949702501296997,
              bottom: 0.10072461515665054,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1608346700668335,
              top: -0.0005038270028308034,
              right: 0.7000015377998352,
              bottom: 0.10268352925777435,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17056162655353546,
              top: -0.00016513130685780197,
              right: 0.6953789591789246,
              bottom: 0.1033887267112732,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15737731754779816,
              top: -0.00010029958502855152,
              right: 0.7008987069129944,
              bottom: 0.10468043386936188,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15259350836277008,
              top: 0.0007855247822590172,
              right: 0.6998311281204224,
              bottom: 0.10318700969219208,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14786387979984283,
              top: 0.000007100985840224894,
              right: 0.6979269981384277,
              bottom: 0.1059747189283371,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14617837965488434,
              top: 0.00004505390825215727,
              right: 0.6959341168403625,
              bottom: 0.10774654895067215,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16792705655097961,
              top: 0.0007312350207939744,
              right: 0.6867910623550415,
              bottom: 0.10805727541446686,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1658790409564972,
              top: 0.000824776419904083,
              right: 0.6941331624984741,
              bottom: 0.10695671290159225,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16512025892734528,
              top: 0.0007560929516330361,
              right: 0.6940159797668457,
              bottom: 0.1078975647687912,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15754905343055725,
              top: 0.0009456422412768006,
              right: 0.6968264579772949,
              bottom: 0.10760598629713058,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1614329069852829,
              top: 0.0014532172353938222,
              right: 0.6933108568191528,
              bottom: 0.10599023848772049,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1636085957288742,
              top: 0.001191345858387649,
              right: 0.6909646391868591,
              bottom: 0.1064278706908226,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15532003343105316,
              top: 0.0009646261460147798,
              right: 0.6926879286766052,
              bottom: 0.10755866020917892,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16443203389644623,
              top: 0.0008570184581913054,
              right: 0.6887245178222656,
              bottom: 0.10751152783632278,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14632387459278107,
              top: 0.0014064672868698835,
              right: 0.6978373527526855,
              bottom: 0.10548295080661774,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16736966371536255,
              top: 0.0014008983271196485,
              right: 0.687612771987915,
              bottom: 0.10474294424057007,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17328490316867828,
              top: 0.0006389406626112759,
              right: 0.6899570226669312,
              bottom: 0.10525774955749512,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12084466964006424,
              top: -0.0006315212231129408,
              right: 0.715056300163269,
              bottom: 0.10815315693616867,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14929310977458954,
              top: 0.0013568400172516704,
              right: 0.6904967427253723,
              bottom: 0.10467279702425003,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14778085052967072,
              top: 0.0010498219635337591,
              right: 0.6929388642311096,
              bottom: 0.10422471910715103,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14977340400218964,
              top: 0.0004940622020512819,
              right: 0.6918897032737732,
              bottom: 0.10483112931251526,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1710614711046219,
              top: 0.0006543666240759194,
              right: 0.6876884698867798,
              bottom: 0.10430586338043213,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14961236715316772,
              top: 0.0010075750760734081,
              right: 0.6997473239898682,
              bottom: 0.10294091701507568,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16198132932186127,
              top: 0.0005005367565900087,
              right: 0.6904129981994629,
              bottom: 0.10433363169431686,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1508082002401352,
              top: 0.0007208895985968411,
              right: 0.6958809494972229,
              bottom: 0.10388752073049545,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16424131393432617,
              top: 0.0004558133950922638,
              right: 0.6890803575515747,
              bottom: 0.10595519095659256,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1639799028635025,
              top: 0.001091447426006198,
              right: 0.6918211579322815,
              bottom: 0.10523952543735504,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16963721811771393,
              top: 0.0011096388334408402,
              right: 0.6903033256530762,
              bottom: 0.10444097965955734,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15686458349227905,
              top: 0.001169864903204143,
              right: 0.695946216583252,
              bottom: 0.10368797183036804,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1558341532945633,
              top: 0.0009822908323258162,
              right: 0.6946718096733093,
              bottom: 0.10353349149227142,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14906124770641327,
              top: 0.0012304481351748109,
              right: 0.6960256099700928,
              bottom: 0.10248146951198578,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1699085235595703,
              top: -0.000018585194993647747,
              right: 0.6886401772499084,
              bottom: 0.10538527369499207,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16629651188850403,
              top: 0.0013208056334406137,
              right: 0.6939003467559814,
              bottom: 0.10390213131904602,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16732057929039001,
              top: 0.0013899961486458778,
              right: 0.6929510831832886,
              bottom: 0.1032688096165657,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16374626755714417,
              top: 0.00016863338532857597,
              right: 0.6951587200164795,
              bottom: 0.10638581961393356,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15716809034347534,
              top: 0.001994131365790963,
              right: 0.6978766918182373,
              bottom: 0.1030484139919281,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16559572517871857,
              top: 0.0006840179557912052,
              right: 0.6915795803070068,
              bottom: 0.10509298741817474,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15473438799381256,
              top: 0.0013441202463582158,
              right: 0.6979132294654846,
              bottom: 0.10388593375682831,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15723340213298798,
              top: 0.0008316300227306783,
              right: 0.6946274638175964,
              bottom: 0.10519973188638687,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1555100828409195,
              top: 0.0012225575046613812,
              right: 0.6957533955574036,
              bottom: 0.10464122146368027,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1501757651567459,
              top: 0.0010918830521404743,
              right: 0.6959193348884583,
              bottom: 0.10443893820047379,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16623912751674652,
              top: 0.00039853021735325456,
              right: 0.6871965527534485,
              bottom: 0.10586918145418167,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16275253891944885,
              top: 0.0007973226602189243,
              right: 0.6915175914764404,
              bottom: 0.10580302774906158,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1490100771188736,
              top: 0.0016546009574085474,
              right: 0.6972431540489197,
              bottom: 0.10304659605026245,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1623956710100174,
              top: 0.0003967468219343573,
              right: 0.6891025900840759,
              bottom: 0.10574918240308762,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15179109573364258,
              top: 0.0006314220954664052,
              right: 0.6970227956771851,
              bottom: 0.10660450160503387,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16620999574661255,
              top: 0.0009644825477153063,
              right: 0.6925865411758423,
              bottom: 0.10672113299369812,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17503106594085693,
              top: 0.0007197909289970994,
              right: 0.6911889314651489,
              bottom: 0.10867734253406525,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16431516408920288,
              top: 0.0016236151568591595,
              right: 0.6950204372406006,
              bottom: 0.10597316920757294,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15466393530368805,
              top: 0.0013375113485381007,
              right: 0.6968172788619995,
              bottom: 0.10442502051591873,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1494825780391693,
              top: 0.0012203509686514735,
              right: 0.6958264112472534,
              bottom: 0.10358168929815292,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14905156195163727,
              top: 0.00030727192643098533,
              right: 0.6944006085395813,
              bottom: 0.10421194136142731,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.176884725689888,
              top: 0.00022231688490137458,
              right: 0.6857381463050842,
              bottom: 0.10571441054344177,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17345155775547028,
              top: 0.001124911243095994,
              right: 0.6935003995895386,
              bottom: 0.10232700407505035,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16786518692970276,
              top: 0.00015886875917203724,
              right: 0.6960450410842896,
              bottom: 0.10450801253318787,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.161183699965477,
              top: 0.0005116245592944324,
              right: 0.6945521831512451,
              bottom: 0.10553060472011566,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11530452221632004,
              top: -0.0001943871029652655,
              right: 0.711739718914032,
              bottom: 0.10748828202486038,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14310504496097565,
              top: 0.0012636382598429918,
              right: 0.6864445209503174,
              bottom: 0.10562717169523239,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14189815521240234,
              top: 0.0006885263719595969,
              right: 0.687682032585144,
              bottom: 0.10761081427335739,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14000044763088226,
              top: 0.000770911225117743,
              right: 0.6897974014282227,
              bottom: 0.10830517113208771,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15366731584072113,
              top: 0.0012093627592548728,
              right: 0.6874034404754639,
              bottom: 0.10763601213693619,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1582040786743164,
              top: 0.0016502337530255318,
              right: 0.6909191608428955,
              bottom: 0.10527663677930832,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16138805449008942,
              top: 0.001475746976211667,
              right: 0.6936661601066589,
              bottom: 0.10422946512699127,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1513160765171051,
              top: 0.0014502934645861387,
              right: 0.6961019039154053,
              bottom: 0.10303813964128494,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15862318873405457,
              top: 0.001159558305516839,
              right: 0.6925514936447144,
              bottom: 0.10208785533905029,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1591162383556366,
              top: 0.0004636158118955791,
              right: 0.6932389736175537,
              bottom: 0.10362198203802109,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1567373424768448,
              top: 0.0007356888381764293,
              right: 0.694054901599884,
              bottom: 0.10421083122491837,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15845686197280884,
              top: 0.0012666023103520274,
              right: 0.6923215389251709,
              bottom: 0.10390656441450119,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15672656893730164,
              top: 0.0010450910776853561,
              right: 0.6928228139877319,
              bottom: 0.10410287976264954,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15368929505348206,
              top: 0.0008653572876937687,
              right: 0.6927700042724609,
              bottom: 0.1043894961476326,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16005723178386688,
              top: 0.0008918288513086736,
              right: 0.691312849521637,
              bottom: 0.10319637507200241,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16829165816307068,
              top: 0.001006455859169364,
              right: 0.6923873424530029,
              bottom: 0.10263476520776749,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1569051295518875,
              top: 0.0005901759141124785,
              right: 0.6975352168083191,
              bottom: 0.10269615799188614,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16085919737815857,
              top: -0.00004743326280731708,
              right: 0.6940299272537231,
              bottom: 0.10562313348054886,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16278035938739777,
              top: 0.001151381409727037,
              right: 0.6926581859588623,
              bottom: 0.10439994186162949,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16241566836833954,
              top: 0.0011635837145149708,
              right: 0.6928360462188721,
              bottom: 0.10428500920534134,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16444547474384308,
              top: 0.0011617065174505115,
              right: 0.6948361992835999,
              bottom: 0.10300538688898087,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15758731961250305,
              top: 0.0005160912405699492,
              right: 0.697077751159668,
              bottom: 0.10442803800106049,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15933966636657715,
              top: 0.0012192238355055451,
              right: 0.695189356803894,
              bottom: 0.10354381054639816,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15515373647212982,
              top: 0.0011164640309289098,
              right: 0.6947575211524963,
              bottom: 0.10270608216524124,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16054071485996246,
              top: -0.00011133083899039775,
              right: 0.690909743309021,
              bottom: 0.10547469556331635,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17843788862228394,
              top: 0.00036882393760606647,
              right: 0.6875154376029968,
              bottom: 0.10470779240131378,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16790235042572021,
              top: 0.0009966978104785085,
              right: 0.6954753994941711,
              bottom: 0.10432786494493484,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.180390402674675,
              top: 0.0008954072254709899,
              right: 0.6922144293785095,
              bottom: 0.10389131307601929,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19119656085968018,
              top: 0.0008875391795299947,
              right: 0.6895644068717957,
              bottom: 0.10441466420888901,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17532822489738464,
              top: 0.0010817046277225018,
              right: 0.6988871097564697,
              bottom: 0.10470277070999146,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17156557738780975,
              top: 0.0010842675110325217,
              right: 0.6964612007141113,
              bottom: 0.10450735688209534,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19450443983078003,
              top: 0.00027633426361717284,
              right: 0.6888647079467773,
              bottom: 0.10630770772695541,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18036235868930817,
              top: 0.0008597178384661674,
              right: 0.6985325813293457,
              bottom: 0.10629675537347794,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17270362377166748,
              top: 0.001173446187749505,
              right: 0.6975564956665039,
              bottom: 0.10577951371669769,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17862515151500702,
              top: 0.0005265341605991125,
              right: 0.6915916800498962,
              bottom: 0.10704345256090164,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16282793879508972,
              top: 0.0020660788286477327,
              right: 0.6964502334594727,
              bottom: 0.10290978848934174,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16283822059631348,
              top: 0.0012110249372199178,
              right: 0.6929455995559692,
              bottom: 0.10194230824708939,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15435603260993958,
              top: 0.0007847670931369066,
              right: 0.6946874856948853,
              bottom: 0.10183063894510269,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1541615128517151,
              top: 0.0006289637531153858,
              right: 0.6936839818954468,
              bottom: 0.10239308327436447,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1617496907711029,
              top: 0.00043751607881858945,
              right: 0.6900501251220703,
              bottom: 0.10328015685081482,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15553386509418488,
              top: 0.0008396795601584017,
              right: 0.6923835873603821,
              bottom: 0.10371328145265579,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16243241727352142,
              top: 0.0008278517052531242,
              right: 0.68895024061203,
              bottom: 0.10530050098896027,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16888020932674408,
              top: 0.001297073788009584,
              right: 0.6894321441650391,
              bottom: 0.10567063093185425,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1573808193206787,
              top: 0.002046033041551709,
              right: 0.6947361826896667,
              bottom: 0.10437694191932678,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15947569906711578,
              top: 0.0015892419032752514,
              right: 0.6930647492408752,
              bottom: 0.10466326773166656,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1506001204252243,
              top: 0.00100493966601789,
              right: 0.6948522925376892,
              bottom: 0.10447649657726288,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15812095999717712,
              top: 0.00026521767722442746,
              right: 0.6884433031082153,
              bottom: 0.10707347095012665,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1539454460144043,
              top: 0.0006882052402943373,
              right: 0.6899325847625732,
              bottom: 0.10759838670492172,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1586829572916031,
              top: 0.0014003474498167634,
              right: 0.6906597018241882,
              bottom: 0.1055186539888382,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.167159304022789,
              top: 0.0010392629774287343,
              right: 0.6906691193580627,
              bottom: 0.10585729032754898,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18554386496543884,
              top: 0.0008505392470397055,
              right: 0.6869896650314331,
              bottom: 0.10628514736890793,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17656880617141724,
              top: 0.0012576462468132377,
              right: 0.6944382190704346,
              bottom: 0.10557576268911362,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17718569934368134,
              top: 0.001406972762197256,
              right: 0.69416743516922,
              bottom: 0.1037113219499588,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18280673027038574,
              top: 0.0009189446573145688,
              right: 0.6937474608421326,
              bottom: 0.10267815738916397,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15884418785572052,
              top: 0.000662761740386486,
              right: 0.701734721660614,
              bottom: 0.10101841390132904,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17051634192466736,
              top: 0.0005081456038169563,
              right: 0.6905733346939087,
              bottom: 0.10157443583011627,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16305381059646606,
              top: 0.0005123527371324599,
              right: 0.6950750946998596,
              bottom: 0.1028595045208931,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16036918759346008,
              top: 0.0004931844305247068,
              right: 0.6962511539459229,
              bottom: 0.10455223172903061,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15424413979053497,
              top: 0.0003271971072535962,
              right: 0.695731520652771,
              bottom: 0.10647252202033997,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16139531135559082,
              top: 0.0009304082486778498,
              right: 0.6914738416671753,
              bottom: 0.10800935328006744,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16448070108890533,
              top: 0.002327581401914358,
              right: 0.6893028616905212,
              bottom: 0.1047603115439415,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1684434562921524,
              top: 0.0009707988938316703,
              right: 0.6906207203865051,
              bottom: 0.10678137093782425,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16190987825393677,
              top: 0.0019807450007647276,
              right: 0.6960397958755493,
              bottom: 0.10309244692325592,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18235836923122406,
              top: 0.001509239198639989,
              right: 0.6875547170639038,
              bottom: 0.10263800621032715,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17863012850284576,
              top: 0.0011554497759789228,
              right: 0.6932482719421387,
              bottom: 0.10355581343173981,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17272493243217468,
              top: 0.000659447512589395,
              right: 0.6935620307922363,
              bottom: 0.10570897907018661,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15140266716480255,
              top: 0.0011310125701129436,
              right: 0.700559675693512,
              bottom: 0.10471926629543304,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1527014672756195,
              top: 0.0014176128897815943,
              right: 0.6942335367202759,
              bottom: 0.10249838978052139,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16916640102863312,
              top: 0.0008336601313203573,
              right: 0.6876410841941833,
              bottom: 0.10265304148197174,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16302108764648438,
              top: 0.0005063018761575222,
              right: 0.6920446157455444,
              bottom: 0.1042536273598671,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16027607023715973,
              top: 0.0009822528809309006,
              right: 0.6936119198799133,
              bottom: 0.10327155143022537,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1599952131509781,
              top: 0.0010292008519172668,
              right: 0.6947097182273865,
              bottom: 0.10323351621627808,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17094208300113678,
              top: 0.00011660691234283149,
              right: 0.6909261345863342,
              bottom: 0.10640639811754227,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1718224734067917,
              top: 0.0013060275232419372,
              right: 0.693822979927063,
              bottom: 0.10504648834466934,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16783586144447327,
              top: 0.0013688126346096396,
              right: 0.6958024501800537,
              bottom: 0.1042301282286644,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17004409432411194,
              top: 0.0013392918044701219,
              right: 0.6959537267684937,
              bottom: 0.10372208058834076,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1570148915052414,
              top: 0.0005573284579440951,
              right: 0.697589099407196,
              bottom: 0.10451330989599228,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16724851727485657,
              top: 0.0007553132600151002,
              right: 0.6918588876724243,
              bottom: 0.10398455709218979,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15543727576732635,
              top: 0.0007074851309880614,
              right: 0.6966200470924377,
              bottom: 0.10450103133916855,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16381588578224182,
              top: 0.000999875133857131,
              right: 0.6908102035522461,
              bottom: 0.10414908081293106,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16562779247760773,
              top: 0.0018186791567131877,
              right: 0.694068431854248,
              bottom: 0.10112084448337555,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18104305863380432,
              top: 0.00015312210598494858,
              right: 0.6865990161895752,
              bottom: 0.10424254089593887,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18088722229003906,
              top: 0.0003544632636476308,
              right: 0.6896958947181702,
              bottom: 0.10642876476049423,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1833375245332718,
              top: 0.001621206640265882,
              right: 0.6914591193199158,
              bottom: 0.10407613217830658,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18017123639583588,
              top: 0.0013352129608392715,
              right: 0.6954874396324158,
              bottom: 0.10402623564004898,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16525550186634064,
              top: 0.0016078697517514229,
              right: 0.6996601819992065,
              bottom: 0.10203585773706436,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15509723126888275,
              top: 0.0013913249131292105,
              right: 0.6974313259124756,
              bottom: 0.10003069043159485,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17059201002120972,
              top: -0.00036289452691562474,
              right: 0.6871526837348938,
              bottom: 0.10425105690956116,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15673328936100006,
              top: 0.0008662677137181163,
              right: 0.6972974538803101,
              bottom: 0.1008475199341774,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1461731195449829,
              top: 0.00031337986001744866,
              right: 0.6984960436820984,
              bottom: 0.10105589032173157,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15633949637413025,
              top: 0.0001824879873311147,
              right: 0.6912369728088379,
              bottom: 0.10204852372407913,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16104471683502197,
              top: 0.0006177005125209689,
              right: 0.6924334764480591,
              bottom: 0.10156388580799103,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1664208620786667,
              top: 0.0003722366818692535,
              right: 0.6953690052032471,
              bottom: 0.10247593373060226,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17697907984256744,
              top: 0.00038971335743553936,
              right: 0.6939707398414612,
              bottom: 0.10338212549686432,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1696927696466446,
              top: 0.0006046180496923625,
              right: 0.6977972984313965,
              bottom: 0.10389553010463715,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1759774386882782,
              top: 0.0009776087244972587,
              right: 0.693283200263977,
              bottom: 0.10421440005302429,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17011824250221252,
              top: 0.0013449161779135466,
              right: 0.6957601308822632,
              bottom: 0.10324227809906006,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15839630365371704,
              top: 0.0013475408777594566,
              right: 0.6998510360717773,
              bottom: 0.10180686414241791,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16879421472549438,
              top: 0.0007376178982667625,
              right: 0.6929079294204712,
              bottom: 0.10190588980913162,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16358862817287445,
              top: 0.0008160670404322445,
              right: 0.6959424614906311,
              bottom: 0.10146050155162811,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16138184070587158,
              top: 0.0006525442586280406,
              right: 0.6953545808792114,
              bottom: 0.10160968452692032,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1606166660785675,
              top: -0.000315051554935053,
              right: 0.6947517395019531,
              bottom: 0.1043708547949791,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1645231544971466,
              top: 0.0006398719269782305,
              right: 0.69263756275177,
              bottom: 0.1041511595249176,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17673905193805695,
              top: 0.00015925036859698594,
              right: 0.6921132206916809,
              bottom: 0.1054946780204773,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1721978634595871,
              top: 0.0011870843591168523,
              right: 0.6967841982841492,
              bottom: 0.10392767190933228,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16210615634918213,
              top: 0.0008070830372162163,
              right: 0.6982533931732178,
              bottom: 0.10390074551105499,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15216214954853058,
              top: 0.0008309711120091379,
              right: 0.698883593082428,
              bottom: 0.10350803285837173,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17507119476795197,
              top: 0.0009029164793901145,
              right: 0.6879764199256897,
              bottom: 0.10367372632026672,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15719670057296753,
              top: 0.0016195871867239475,
              right: 0.698093831539154,
              bottom: 0.10192541778087616,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15387220680713654,
              top: 0.0006267724093049765,
              right: 0.6960211396217346,
              bottom: 0.10333969444036484,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1672385334968567,
              top: 0.00036027561873197556,
              right: 0.6893235445022583,
              bottom: 0.10465303808450699,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17919199168682098,
              top: 0.0004594821948558092,
              right: 0.689142107963562,
              bottom: 0.10544949024915695,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17467963695526123,
              top: 0.0006662816158495843,
              right: 0.6935274600982666,
              bottom: 0.10695687681436539,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1768098771572113,
              top: 0.00143483467400074,
              right: 0.6940542459487915,
              bottom: 0.10519208014011383,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16167980432510376,
              top: 0.0012888784985989332,
              right: 0.7006306052207947,
              bottom: 0.10379742830991745,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.142733633518219,
              top: 0.000930661044549197,
              right: 0.7015138268470764,
              bottom: 0.10331029444932938,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17872704565525055,
              top: 0.000500252703204751,
              right: 0.6846399307250977,
              bottom: 0.10437566041946411,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17497484385967255,
              top: 0.0011889906600117683,
              right: 0.6914413571357727,
              bottom: 0.1039070263504982,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16356882452964783,
              top: 0.0011928168823942542,
              right: 0.6959985494613647,
              bottom: 0.1040223091840744,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1762351393699646,
              top: 0.0009621388744562864,
              right: 0.6905915141105652,
              bottom: 0.10466671735048294,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16862821578979492,
              top: 0.0003708266303874552,
              right: 0.6949180960655212,
              bottom: 0.10670480877161026,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.147624671459198,
              top: 0.0013344852486625314,
              right: 0.7019878029823303,
              bottom: 0.10454937070608139,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15437167882919312,
              top: 0.001304446253925562,
              right: 0.6927110552787781,
              bottom: 0.10472653806209564,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1594410389661789,
              top: 0.0015304847620427608,
              right: 0.6910014152526855,
              bottom: 0.10378123074769974,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14937853813171387,
              top: 0.0017564920708537102,
              right: 0.6958011388778687,
              bottom: 0.1029031053185463,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16062666475772858,
              top: 0.0015495428815484047,
              right: 0.6914281845092773,
              bottom: 0.1020260825753212,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15458664298057556,
              top: 0.00041647019679658115,
              right: 0.6958267688751221,
              bottom: 0.10474754124879837,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15566536784172058,
              top: 0.0011166776530444622,
              right: 0.6945900917053223,
              bottom: 0.10492604970932007,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1747128963470459,
              top: 0.001229981193318963,
              right: 0.6895953416824341,
              bottom: 0.10515845566987991,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16825620830059052,
              top: 0.0016529340064153075,
              right: 0.6964807510375977,
              bottom: 0.10386199504137039,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1585465371608734,
              top: 0.001336051500402391,
              right: 0.6988202333450317,
              bottom: 0.10378437489271164,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16605140268802643,
              top: -0.00008684404019732028,
              right: 0.6942604184150696,
              bottom: 0.10751955956220627,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17035524547100067,
              top: 0.0011347680119797587,
              right: 0.6934939622879028,
              bottom: 0.10623692721128464,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17744703590869904,
              top: 0.0014429164584726095,
              right: 0.692143976688385,
              bottom: 0.10545534640550613,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17630846798419952,
              top: 0.0014816299080848694,
              right: 0.6932820081710815,
              bottom: 0.10458631068468094,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16586337983608246,
              top: 0.0015458713751286268,
              right: 0.6977702379226685,
              bottom: 0.1032831221818924,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1775454729795456,
              top: 0.0011151422513648868,
              right: 0.6926120519638062,
              bottom: 0.10294724255800247,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1667768359184265,
              top: 0.0012330288300290704,
              right: 0.6972059607505798,
              bottom: 0.10237407684326172,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16681209206581116,
              top: 0.0011355100432410836,
              right: 0.6944876909255981,
              bottom: 0.1017906665802002,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17340658605098724,
              top: 0.0005582576268352568,
              right: 0.6904329061508179,
              bottom: 0.10394395142793655,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17602980136871338,
              top: 0.00046737404773011804,
              right: 0.693123996257782,
              bottom: 0.10602662712335587,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.175625279545784,
              top: 0.00145172537304461,
              right: 0.6955196857452393,
              bottom: 0.10355668514966965,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1942143440246582,
              top: 0.0007785539492033422,
              right: 0.6914609670639038,
              bottom: 0.10466067492961884,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17578119039535522,
              top: 0.0013444843934848905,
              right: 0.6996268630027771,
              bottom: 0.102818064391613,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16899782419204712,
              top: 0.0009477105922996998,
              right: 0.6983914375305176,
              bottom: 0.1029781624674797,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1839107871055603,
              top: 0.0008266569930128753,
              right: 0.6923292875289917,
              bottom: 0.10242623835802078,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18063786625862122,
              top: 0.00039933828520588577,
              right: 0.695332407951355,
              bottom: 0.10330641269683838,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17765367031097412,
              top: 0.0011268013622611761,
              right: 0.6977000832557678,
              bottom: 0.1022733747959137,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17965182662010193,
              top: 0.0005199125735089183,
              right: 0.6950734853744507,
              bottom: 0.10373286157846451,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16648724675178528,
              top: 0.000396865390939638,
              right: 0.6958345174789429,
              bottom: 0.10530055314302444,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15967264771461487,
              top: 0.001374501152895391,
              right: 0.6948890686035156,
              bottom: 0.10310500860214233,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18289734423160553,
              top: 0.0008407695568166673,
              right: 0.6865975260734558,
              bottom: 0.10263296961784363,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16693639755249023,
              top: 0.0005798552301712334,
              right: 0.6956972479820251,
              bottom: 0.10256149619817734,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1665758341550827,
              top: 0.0001010451524052769,
              right: 0.6959640383720398,
              bottom: 0.10388196259737015,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17642967402935028,
              top: 0.000929033849388361,
              right: 0.6924191117286682,
              bottom: 0.10328786075115204,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16587670147418976,
              top: 0.0015930829104036093,
              right: 0.6968721151351929,
              bottom: 0.10205825418233871,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16810792684555054,
              top: 0.0008204371551983058,
              right: 0.6934230923652649,
              bottom: 0.10288853198289871,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16104918718338013,
              top: 0.00037594573223032057,
              right: 0.696030855178833,
              bottom: 0.1053193062543869,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14517433941364288,
              top: 0.0007277241675183177,
              right: 0.6997512578964233,
              bottom: 0.10466388612985611,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1532464623451233,
              top: 0.0007577398791909218,
              right: 0.6920771598815918,
              bottom: 0.10499650239944458,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17020174860954285,
              top: 0.00042739775381051004,
              right: 0.6890698671340942,
              bottom: 0.10576014965772629,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.153522327542305,
              top: 0.0014318214962258935,
              right: 0.6996566653251648,
              bottom: 0.10392770171165466,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1579158902168274,
              top: 0.0011535240337252617,
              right: 0.6946074962615967,
              bottom: 0.10339675843715668,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15703652799129486,
              top: 0.00026360381161794066,
              right: 0.6942479610443115,
              bottom: 0.10415070503950119,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15710517764091492,
              top: 0.0005021712859161198,
              right: 0.6944171190261841,
              bottom: 0.10429647564888,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1544097363948822,
              top: 0.0009566821972839534,
              right: 0.6957076787948608,
              bottom: 0.10279636830091476,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15597301721572876,
              top: 0.0011625731131061912,
              right: 0.6948053240776062,
              bottom: 0.10076240450143814,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15606620907783508,
              top: 0.0005303650978021324,
              right: 0.6949175596237183,
              bottom: 0.10088743269443512,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15157893300056458,
              top: 0.0004049472918268293,
              right: 0.6961146593093872,
              bottom: 0.10159321129322052,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16873344779014587,
              top: -0.00003176997051923536,
              right: 0.6890853643417358,
              bottom: 0.10425513237714767,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16209842264652252,
              top: 0.0008187628700397909,
              right: 0.6948204636573792,
              bottom: 0.10427435487508774,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1557973474264145,
              top: 0.001312835025601089,
              right: 0.6963565349578857,
              bottom: 0.10434725135564804,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.165232315659523,
              top: 0.001852930523455143,
              right: 0.6933473348617554,
              bottom: 0.10307306051254272,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15448971092700958,
              top: 0.0013175748754292727,
              right: 0.6995319128036499,
              bottom: 0.10265329480171204,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15395979583263397,
              top: 0.001227276399731636,
              right: 0.6967534422874451,
              bottom: 0.10235078632831573,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1538735330104828,
              top: 0.0009689428843557835,
              right: 0.6948295831680298,
              bottom: 0.10274390131235123,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15815314650535583,
              top: 0.0009982873452827334,
              right: 0.6914669275283813,
              bottom: 0.10150312632322311,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14967992901802063,
              top: 0.0013547021662816405,
              right: 0.6947615146636963,
              bottom: 0.09979436546564102,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14005407691001892,
              top: 0.0014193550450727344,
              right: 0.6978132724761963,
              bottom: 0.09822908043861389,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15165714919567108,
              top: 0.000718211114872247,
              right: 0.6918423175811768,
              bottom: 0.09929631650447845,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15270055830478668,
              top: 0.0008016655337996781,
              right: 0.6944989562034607,
              bottom: 0.10130717605352402,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15588152408599854,
              top: 0.0010871061822399497,
              right: 0.6946179270744324,
              bottom: 0.10242988914251328,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15278607606887817,
              top: 0.0012493097456172109,
              right: 0.6951395869255066,
              bottom: 0.10316573083400726,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17875893414020538,
              top: 0.0014975020894780755,
              right: 0.6865360736846924,
              bottom: 0.10329701006412506,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18935219943523407,
              top: 0.000632379436865449,
              right: 0.6922326683998108,
              bottom: 0.10507849603891373,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1673920899629593,
              top: 0.0015726436395198107,
              right: 0.7031559944152832,
              bottom: 0.10339301824569702,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18056383728981018,
              top: 0.0008484845166094601,
              right: 0.6949090957641602,
              bottom: 0.10478778928518295,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18289750814437866,
              top: 0.0014056608779355884,
              right: 0.6955950856208801,
              bottom: 0.10371711105108261,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17698104679584503,
              top: 0.0013858834281563759,
              right: 0.6978671550750732,
              bottom: 0.10269984602928162,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16896560788154602,
              top: 0.0008770141866989434,
              right: 0.6984416246414185,
              bottom: 0.10317347198724747,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16586843132972717,
              top: 0.0011161193251609802,
              right: 0.6962857246398926,
              bottom: 0.10167471319437027,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1720792055130005,
              top: 0.0006436619441956282,
              right: 0.6922428607940674,
              bottom: 0.10294677317142487,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16215522587299347,
              top: 0.0005526538006961346,
              right: 0.6956143975257874,
              bottom: 0.10335303843021393,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16250155866146088,
              top: 0.0004750727384816855,
              right: 0.6927674412727356,
              bottom: 0.10459315776824951,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1624777913093567,
              top: 0.0003840960271190852,
              right: 0.6937577724456787,
              bottom: 0.10520615428686142,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15384803712368011,
              top: 0.0014585584867745638,
              right: 0.6966978907585144,
              bottom: 0.10350573062896729,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15491129457950592,
              top: 0.0005791647708974779,
              right: 0.693646252155304,
              bottom: 0.10538516938686371,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17308741807937622,
              top: 0.0007893445435911417,
              right: 0.6883535981178284,
              bottom: 0.1075202003121376,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1818774789571762,
              top: 0.0018138670129701495,
              right: 0.6914737224578857,
              bottom: 0.10507842153310776,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1741921305656433,
              top: 0.0016423941124230623,
              right: 0.6954584121704102,
              bottom: 0.10475484281778336,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1780964881181717,
              top: 0.0011897677322849631,
              right: 0.6921302676200867,
              bottom: 0.10402140021324158,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16506464779376984,
              top: 0.001091483049094677,
              right: 0.6966789960861206,
              bottom: 0.10481425374746323,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16774287819862366,
              top: 0.0008608129573985934,
              right: 0.6921347379684448,
              bottom: 0.10549955070018768,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1551247537136078,
              top: 0.001260189339518547,
              right: 0.6958321332931519,
              bottom: 0.10475845634937286,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15563543140888214,
              top: 0.0009041055454872549,
              right: 0.6924600005149841,
              bottom: 0.10651425272226334,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15644341707229614,
              top: 0.0009348617168143392,
              right: 0.6918022036552429,
              bottom: 0.10736655443906784,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15410684049129486,
              top: 0.0013226462760940194,
              right: 0.6924696564674377,
              bottom: 0.10688529163599014,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15800529718399048,
              top: 0.0014798259362578392,
              right: 0.6887800097465515,
              bottom: 0.10642730444669724,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16358733177185059,
              top: 0.0012535594869405031,
              right: 0.6902585029602051,
              bottom: 0.10694369673728943,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16602419316768646,
              top: 0.0014053634367883205,
              right: 0.6931853890419006,
              bottom: 0.10642493516206741,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15939828753471375,
              top: 0.0011680310126394033,
              right: 0.6962565183639526,
              bottom: 0.10640403628349304,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17634686827659607,
              top: 0.0011291666887700558,
              right: 0.6888365745544434,
              bottom: 0.10679630190134048,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18562908470630646,
              top: 0.0014139804989099503,
              right: 0.6909909844398499,
              bottom: 0.10724473744630814,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18528716266155243,
              top: 0.0009280895465053618,
              right: 0.6937030553817749,
              bottom: 0.10832135379314423,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17364320158958435,
              top: 0.001494177500717342,
              right: 0.6980825662612915,
              bottom: 0.1065244972705841,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17168942093849182,
              top: 0.0016209291061386466,
              right: 0.6958127021789551,
              bottom: 0.10525396466255188,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1724994033575058,
              top: 0.0011767419055104256,
              right: 0.6921578645706177,
              bottom: 0.10588093847036362,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17151986062526703,
              top: 0.0008336970349773765,
              right: 0.6926282644271851,
              bottom: 0.10660076886415482,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15517842769622803,
              top: 0.001170904259197414,
              right: 0.6979526281356812,
              bottom: 0.10549551993608475,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17322655022144318,
              top: 0.001052376115694642,
              right: 0.7059123516082764,
              bottom: 0.10267496109008789,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21382510662078857,
              top: 0.001090227859094739,
              right: 0.7012172937393188,
              bottom: 0.10009735822677612,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20284993946552277,
              top: 0.00101042864844203,
              right: 0.7176780700683594,
              bottom: 0.09959647059440613,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22226901352405548,
              top: 0.0006025696056894958,
              right: 0.7052144408226013,
              bottom: 0.09967735409736633,
            },
          },
        ],
      },
      {
        name: 'table',
        confidence: 0.787226676940918,
        frames: [
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03739345073699951,
              top: 0.3906283378601074,
              right: 0.7936263084411621,
              bottom: 0.6879010796546936,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0379505380988121,
              top: 0.3902738690376282,
              right: 0.793301522731781,
              bottom: 0.6853519678115845,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03772817179560661,
              top: 0.3899095952510834,
              right: 0.794121265411377,
              bottom: 0.6851465702056885,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03997010365128517,
              top: 0.39007216691970825,
              right: 0.7936909794807434,
              bottom: 0.6845639944076538,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03844277188181877,
              top: 0.38966965675354004,
              right: 0.7949588894844055,
              bottom: 0.6854714751243591,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03775738924741745,
              top: 0.38992568850517273,
              right: 0.794710636138916,
              bottom: 0.685600996017456,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037703342735767365,
              top: 0.3907061219215393,
              right: 0.7942924499511719,
              bottom: 0.6863418817520142,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038213446736335754,
              top: 0.3913382887840271,
              right: 0.796326756477356,
              bottom: 0.6857519149780273,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035765208303928375,
              top: 0.3886438310146332,
              right: 0.799293577671051,
              bottom: 0.6879311203956604,
            },
          },
          {
            timeOffset: {
              low: 0,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03367851674556732,
              top: 0.38901880383491516,
              right: 0.8038632273674011,
              bottom: 0.6944694519042969,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034537576138973236,
              top: 0.38746580481529236,
              right: 0.8092685341835022,
              bottom: 0.7001261711120605,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03645657002925873,
              top: 0.3894055485725403,
              right: 0.8136901259422302,
              bottom: 0.6931620836257935,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.041118137538433075,
              top: 0.38639822602272034,
              right: 0.7958861589431763,
              bottom: 0.6925509572029114,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04120463505387306,
              top: 0.3840884566307068,
              right: 0.761109471321106,
              bottom: 0.6911147832870483,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03225729241967201,
              top: 0.3870407044887543,
              right: 0.747355043888092,
              bottom: 0.6883890628814697,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02979498729109764,
              top: 0.3904353380203247,
              right: 0.7389907240867615,
              bottom: 0.6832805871963501,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.022221455350518227,
              top: 0.3896975517272949,
              right: 0.731417179107666,
              bottom: 0.6825428009033203,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.015098058618605137,
              top: 0.3975633978843689,
              right: 0.7548258304595947,
              bottom: 0.6902267932891846,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025975340977311134,
              top: 0.3915138244628906,
              right: 0.7474935054779053,
              bottom: 0.6848156452178955,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.017793282866477966,
              top: 0.39073991775512695,
              right: 0.7391080260276794,
              bottom: 0.683975100517273,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009908825159072876,
              top: 0.39150694012641907,
              right: 0.7312066555023193,
              bottom: 0.6847366094589233,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0025755607057362795,
              top: 0.39267975091934204,
              right: 0.7238720059394836,
              bottom: 0.6859089136123657,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.000561412307433784,
              top: 0.394010454416275,
              right: 0.7207348942756653,
              bottom: 0.6872396469116211,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004812160972505808,
              top: 0.40050235390663147,
              right: 0.6947120428085327,
              bottom: 0.6808441281318665,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0025660302489995956,
              top: 0.40265485644340515,
              right: 0.6898607611656189,
              bottom: 0.6819273233413696,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.038262609392404556,
              top: 0.3679569959640503,
              right: 0.8543898463249207,
              bottom: 0.7311098575592041,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15497955679893494,
              top: 0.39003944396972656,
              right: 0.8384445905685425,
              bottom: 0.7049930691719055,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.25003618001937866,
              top: 0.39033520221710205,
              right: 0.8975498676300049,
              bottom: 0.6951241493225098,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.26724717020988464,
              top: 0.3896603584289551,
              right: 0.9340788125991821,
              bottom: 0.6902751326560974,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.26285892724990845,
              top: 0.3831014335155487,
              right: 0.9456395506858826,
              bottom: 0.6969087719917297,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2228076457977295,
              top: 0.38530099391937256,
              right: 0.9520885944366455,
              bottom: 0.69350665807724,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16801774501800537,
              top: 0.3861594796180725,
              right: 0.9498513340950012,
              bottom: 0.6934003233909607,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10485023260116577,
              top: 0.37896493077278137,
              right: 0.9452158808708191,
              bottom: 0.7274575233459473,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06774010509252548,
              top: 0.37320584058761597,
              right: 0.9389357566833496,
              bottom: 0.7741636037826538,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.042972058057785034,
              top: 0.39275243878364563,
              right: 0.9238094091415405,
              bottom: 0.7600598335266113,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027796853333711624,
              top: 0.3906712532043457,
              right: 0.9216488599777222,
              bottom: 0.769193708896637,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026587801054120064,
              top: 0.3946954607963562,
              right: 0.9152483940124512,
              bottom: 0.7492320537567139,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01884870044887066,
              top: 0.38054078817367554,
              right: 0.9231215119361877,
              bottom: 0.7901808023452759,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02517065405845642,
              top: 0.39422866702079773,
              right: 0.9200043678283691,
              bottom: 0.7690200805664062,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03150073066353798,
              top: 0.39354339241981506,
              right: 0.9165471196174622,
              bottom: 0.7522086501121521,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029031800106167793,
              top: 0.38637641072273254,
              right: 0.9237717986106873,
              bottom: 0.7567972540855408,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03337175399065018,
              top: 0.38490739464759827,
              right: 0.921988308429718,
              bottom: 0.7521848678588867,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03770718351006508,
              top: 0.38795337080955505,
              right: 0.920275866985321,
              bottom: 0.7258400321006775,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03530872240662575,
              top: 0.3817664384841919,
              right: 0.9241865873336792,
              bottom: 0.7295598387718201,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039212290197610855,
              top: 0.3845578730106354,
              right: 0.9193220734596252,
              bottom: 0.7160294651985168,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035749517381191254,
              top: 0.3804086744785309,
              right: 0.9230931997299194,
              bottom: 0.7238756418228149,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03390032798051834,
              top: 0.37876802682876587,
              right: 0.9245912432670593,
              bottom: 0.7336154580116272,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030872337520122528,
              top: 0.37772342562675476,
              right: 0.9269431829452515,
              bottom: 0.7526820302009583,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034561097621917725,
              top: 0.38682466745376587,
              right: 0.9247594475746155,
              bottom: 0.739427924156189,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034288521856069565,
              top: 0.3865276575088501,
              right: 0.9245415925979614,
              bottom: 0.7310259342193604,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037611521780490875,
              top: 0.38662880659103394,
              right: 0.91949063539505,
              bottom: 0.7260642051696777,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0355103462934494,
              top: 0.3837014436721802,
              right: 0.9242901802062988,
              bottom: 0.7423377633094788,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03595463186502457,
              top: 0.38826417922973633,
              right: 0.9241241812705994,
              bottom: 0.7433557510375977,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03456050902605057,
              top: 0.38560789823532104,
              right: 0.9293510913848877,
              bottom: 0.7695209980010986,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03597217798233032,
              top: 0.3933565020561218,
              right: 0.9276615381240845,
              bottom: 0.7713616490364075,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030305854976177216,
              top: 0.3974333703517914,
              right: 0.9332464933395386,
              bottom: 0.7599456310272217,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03300688415765762,
              top: 0.3899259865283966,
              right: 0.929424524307251,
              bottom: 0.7780876159667969,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0345320850610733,
              top: 0.39716964960098267,
              right: 0.926146388053894,
              bottom: 0.7607862949371338,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039987120777368546,
              top: 0.40226465463638306,
              right: 0.9180698394775391,
              bottom: 0.723958432674408,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039242442697286606,
              top: 0.3930080831050873,
              right: 0.9188094139099121,
              bottom: 0.7146919369697571,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036806151270866394,
              top: 0.38604846596717834,
              right: 0.9187666773796082,
              bottom: 0.7177059650421143,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03829650208353996,
              top: 0.3884974718093872,
              right: 0.9149354696273804,
              bottom: 0.7063544988632202,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0336063876748085,
              top: 0.38233017921447754,
              right: 0.9216856360435486,
              bottom: 0.725210428237915,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033796265721321106,
              top: 0.3818073868751526,
              right: 0.922603189945221,
              bottom: 0.7434201836585999,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03274869918823242,
              top: 0.3904029428958893,
              right: 0.9245938062667847,
              bottom: 0.7429976463317871,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03159540519118309,
              top: 0.3904803395271301,
              right: 0.9278120398521423,
              bottom: 0.7601730823516846,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037644948810338974,
              top: 0.4008910059928894,
              right: 0.9203087091445923,
              bottom: 0.7290583848953247,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03581966832280159,
              top: 0.39435553550720215,
              right: 0.9194791913032532,
              bottom: 0.7236745357513428,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03220762312412262,
              top: 0.3873419165611267,
              right: 0.9221027493476868,
              bottom: 0.7392827272415161,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03251328319311142,
              top: 0.38868144154548645,
              right: 0.9224517345428467,
              bottom: 0.7401458024978638,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0369693785905838,
              top: 0.3934504985809326,
              right: 0.9175146222114563,
              bottom: 0.7223426699638367,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031019726768136024,
              top: 0.3876379132270813,
              right: 0.9239819049835205,
              bottom: 0.7347803115844727,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03014398366212845,
              top: 0.39124828577041626,
              right: 0.924127995967865,
              bottom: 0.7305287718772888,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032435040920972824,
              top: 0.39054688811302185,
              right: 0.9203923940658569,
              bottom: 0.7295218110084534,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029297489672899246,
              top: 0.38389450311660767,
              right: 0.9237748384475708,
              bottom: 0.7499265670776367,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0314987413585186,
              top: 0.39118269085884094,
              right: 0.9229304790496826,
              bottom: 0.7418241500854492,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03158250078558922,
              top: 0.39233094453811646,
              right: 0.9223359227180481,
              bottom: 0.7357417345046997,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029656071215867996,
              top: 0.3835517168045044,
              right: 0.927699625492096,
              bottom: 0.76517254114151,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03180636093020439,
              top: 0.39390620589256287,
              right: 0.9242733716964722,
              bottom: 0.748293399810791,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033873360604047775,
              top: 0.39570537209510803,
              right: 0.9197494387626648,
              bottom: 0.7309298515319824,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03219863027334213,
              top: 0.3832901120185852,
              right: 0.9226334691047668,
              bottom: 0.7529269456863403,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03168055787682533,
              top: 0.3911437690258026,
              right: 0.9208788871765137,
              bottom: 0.7373800277709961,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0312957838177681,
              top: 0.38858717679977417,
              right: 0.9232063293457031,
              bottom: 0.7373564839363098,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032414380460977554,
              top: 0.38892248272895813,
              right: 0.9196686148643494,
              bottom: 0.7342368364334106,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03506943956017494,
              top: 0.3919704258441925,
              right: 0.9156539440155029,
              bottom: 0.7241084575653076,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029341790825128555,
              top: 0.3829610049724579,
              right: 0.9242532253265381,
              bottom: 0.7551453113555908,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03109717182815075,
              top: 0.38822367787361145,
              right: 0.9225184321403503,
              bottom: 0.7667115926742554,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036940883845090866,
              top: 0.4012085497379303,
              right: 0.9151975512504578,
              bottom: 0.7389580607414246,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033643703907728195,
              top: 0.39546605944633484,
              right: 0.9161738753318787,
              bottom: 0.742940366268158,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03719836845993996,
              top: 0.40108075737953186,
              right: 0.9113507866859436,
              bottom: 0.7191789746284485,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04056030511856079,
              top: 0.39796116948127747,
              right: 0.9098288416862488,
              bottom: 0.709296464920044,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039558034390211105,
              top: 0.3935950696468353,
              right: 0.9123396277427673,
              bottom: 0.7111173272132874,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03457479551434517,
              top: 0.39310121536254883,
              right: 0.9141174554824829,
              bottom: 0.7150859832763672,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03629414737224579,
              top: 0.39385831356048584,
              right: 0.9117055535316467,
              bottom: 0.7113338708877563,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03467421233654022,
              top: 0.3899337649345398,
              right: 0.91108638048172,
              bottom: 0.714545726776123,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029005572199821472,
              top: 0.3876321315765381,
              right: 0.9178652167320251,
              bottom: 0.7238595485687256,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029520483687520027,
              top: 0.38609179854393005,
              right: 0.9217550754547119,
              bottom: 0.7379122376441956,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030566934496164322,
              top: 0.39237722754478455,
              right: 0.9209107756614685,
              bottom: 0.7279731035232544,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03341113030910492,
              top: 0.38846272230148315,
              right: 0.9218065142631531,
              bottom: 0.7334384918212891,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03421087935566902,
              top: 0.3796834349632263,
              right: 0.9235497117042542,
              bottom: 0.7568110227584839,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03379729762673378,
              top: 0.38328346610069275,
              right: 0.9271414279937744,
              bottom: 0.7666686177253723,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03377525135874748,
              top: 0.3845635950565338,
              right: 0.9281564950942993,
              bottom: 0.7759006023406982,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03538256138563156,
              top: 0.39003661274909973,
              right: 0.9262264370918274,
              bottom: 0.7726635932922363,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03685149922966957,
              top: 0.3917824327945709,
              right: 0.9255937337875366,
              bottom: 0.7605085968971252,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03481445461511612,
              top: 0.38688474893569946,
              right: 0.930557906627655,
              bottom: 0.7660619020462036,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036935046315193176,
              top: 0.38926663994789124,
              right: 0.925489068031311,
              bottom: 0.7554283738136292,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.040222637355327606,
              top: 0.3921385705471039,
              right: 0.9190834760665894,
              bottom: 0.7228120565414429,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03464587405323982,
              top: 0.3779209554195404,
              right: 0.9235123991966248,
              bottom: 0.7413475513458252,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03247153013944626,
              top: 0.3768121302127838,
              right: 0.9266281127929688,
              bottom: 0.760723888874054,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03457965329289436,
              top: 0.3872414231300354,
              right: 0.9228122234344482,
              bottom: 0.7483048439025879,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028919076547026634,
              top: 0.3791162073612213,
              right: 0.9279159903526306,
              bottom: 0.7864922285079956,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0340384766459465,
              top: 0.393557071685791,
              right: 0.9209721684455872,
              bottom: 0.7550417184829712,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034272048622369766,
              top: 0.3897140622138977,
              right: 0.9212189316749573,
              bottom: 0.7489043474197388,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033763740211725235,
              top: 0.3853134214878082,
              right: 0.9211099743843079,
              bottom: 0.7460480332374573,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03298952430486679,
              top: 0.3831535875797272,
              right: 0.9233042597770691,
              bottom: 0.7484107613563538,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037015121430158615,
              top: 0.3878915309906006,
              right: 0.9188985228538513,
              bottom: 0.7239936590194702,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03777841478586197,
              top: 0.38317856192588806,
              right: 0.9190124869346619,
              bottom: 0.7249964475631714,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035346537828445435,
              top: 0.38012242317199707,
              right: 0.9207502603530884,
              bottom: 0.7272754311561584,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035709694027900696,
              top: 0.38317036628723145,
              right: 0.9198035001754761,
              bottom: 0.7198941111564636,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03271035477519035,
              top: 0.3766871690750122,
              right: 0.9221153855323792,
              bottom: 0.7461956739425659,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033481959253549576,
              top: 0.3830126225948334,
              right: 0.9224599003791809,
              bottom: 0.757041871547699,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0341312438249588,
              top: 0.38633644580841064,
              right: 0.9244064688682556,
              bottom: 0.7641512155532837,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03634083643555641,
              top: 0.3976661264896393,
              right: 0.9197375774383545,
              bottom: 0.7311186790466309,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03604171797633171,
              top: 0.3943467438220978,
              right: 0.9149968028068542,
              bottom: 0.7121078968048096,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03203916549682617,
              top: 0.3846111297607422,
              right: 0.9152734279632568,
              bottom: 0.7191707491874695,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030390052124857903,
              top: 0.3856584131717682,
              right: 0.9153541922569275,
              bottom: 0.7159362435340881,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030194712802767754,
              top: 0.3838712275028229,
              right: 0.9151899814605713,
              bottom: 0.7183640003204346,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03147588297724724,
              top: 0.38541579246520996,
              right: 0.9124571681022644,
              bottom: 0.7118955850601196,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028769558295607567,
              top: 0.38509631156921387,
              right: 0.9142020344734192,
              bottom: 0.7124649882316589,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03320351243019104,
              top: 0.3887026906013489,
              right: 0.9104124307632446,
              bottom: 0.7036715745925903,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031222384423017502,
              top: 0.38743773102760315,
              right: 0.910420835018158,
              bottom: 0.7100192308425903,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028068382292985916,
              top: 0.38329949975013733,
              right: 0.9149438142776489,
              bottom: 0.7322556376457214,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027329424396157265,
              top: 0.38821858167648315,
              right: 0.9184995293617249,
              bottom: 0.743867039680481,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03018740937113762,
              top: 0.3965035676956177,
              right: 0.9139030575752258,
              bottom: 0.7248295545578003,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027880897745490074,
              top: 0.38972267508506775,
              right: 0.9178690910339355,
              bottom: 0.7385902404785156,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03032224252820015,
              top: 0.3956470191478729,
              right: 0.9154493808746338,
              bottom: 0.720928966999054,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028962574899196625,
              top: 0.39038893580436707,
              right: 0.9172680974006653,
              bottom: 0.724665641784668,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02719494141638279,
              top: 0.3893338441848755,
              right: 0.919066309928894,
              bottom: 0.7272316217422485,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03012481890618801,
              top: 0.3913450241088867,
              right: 0.9141655564308167,
              bottom: 0.7188870310783386,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026421673595905304,
              top: 0.3778734505176544,
              right: 0.9197417497634888,
              bottom: 0.76026451587677,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029975291341543198,
              top: 0.390701562166214,
              right: 0.9168210625648499,
              bottom: 0.7446496486663818,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03191337734460831,
              top: 0.3953264355659485,
              right: 0.9151096343994141,
              bottom: 0.7171275615692139,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027129463851451874,
              top: 0.38640931248664856,
              right: 0.9181309938430786,
              bottom: 0.7225207090377808,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03385316953063011,
              top: 0.3909773826599121,
              right: 0.9113795757293701,
              bottom: 0.7086352109909058,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.016935046762228012,
              top: 0.37855082750320435,
              right: 0.9301602244377136,
              bottom: 0.7462066411972046,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025689747184515,
              top: 0.38670963048934937,
              right: 0.9225576519966125,
              bottom: 0.7513291835784912,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027644986286759377,
              top: 0.3916023373603821,
              right: 0.9209784865379333,
              bottom: 0.7526284456253052,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03260015323758125,
              top: 0.39771199226379395,
              right: 0.9150456190109253,
              bottom: 0.7281450033187866,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03131161630153656,
              top: 0.3917408585548401,
              right: 0.9162364602088928,
              bottom: 0.7259424328804016,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028046444058418274,
              top: 0.3870124816894531,
              right: 0.9190569519996643,
              bottom: 0.7316081523895264,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02859392575919628,
              top: 0.3834575414657593,
              right: 0.9202811121940613,
              bottom: 0.7444784641265869,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02927275002002716,
              top: 0.38737547397613525,
              right: 0.9195083379745483,
              bottom: 0.7391676902770996,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03059552237391472,
              top: 0.3893919289112091,
              right: 0.9183180928230286,
              bottom: 0.7328311800956726,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035805441439151764,
              top: 0.39254897832870483,
              right: 0.9127405881881714,
              bottom: 0.7133924961090088,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03189022094011307,
              top: 0.38627660274505615,
              right: 0.9156998991966248,
              bottom: 0.7187089323997498,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029669472947716713,
              top: 0.38610050082206726,
              right: 0.9157968759536743,
              bottom: 0.7193242311477661,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029443858191370964,
              top: 0.3851928412914276,
              right: 0.9161227345466614,
              bottom: 0.7256826162338257,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025648675858974457,
              top: 0.38343074917793274,
              right: 0.9203748106956482,
              bottom: 0.7400243282318115,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025532230734825134,
              top: 0.3841346204280853,
              right: 0.9247403144836426,
              bottom: 0.763054370880127,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026305001229047775,
              top: 0.3868325650691986,
              right: 0.9250353574752808,
              bottom: 0.786487340927124,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03197949379682541,
              top: 0.4061679542064667,
              right: 0.9154518246650696,
              bottom: 0.7352607846260071,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028729254379868507,
              top: 0.3918647766113281,
              right: 0.9164857864379883,
              bottom: 0.7416616678237915,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027693940326571465,
              top: 0.3917594850063324,
              right: 0.9157639145851135,
              bottom: 0.726797878742218,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027902759611606598,
              top: 0.38652491569519043,
              right: 0.9160878658294678,
              bottom: 0.7283860445022583,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02955147810280323,
              top: 0.3894515335559845,
              right: 0.9148751497268677,
              bottom: 0.7128167152404785,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029339969158172607,
              top: 0.3837825059890747,
              right: 0.9155622124671936,
              bottom: 0.7158796787261963,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02860664203763008,
              top: 0.3816981017589569,
              right: 0.917405903339386,
              bottom: 0.7233838438987732,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026407761499285698,
              top: 0.37411969900131226,
              right: 0.9230726361274719,
              bottom: 0.7689269781112671,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02872237004339695,
              top: 0.3961624503135681,
              right: 0.9183832406997681,
              bottom: 0.7326035499572754,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028759052976965904,
              top: 0.3926262855529785,
              right: 0.9171288013458252,
              bottom: 0.7282649278640747,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030157985165715218,
              top: 0.39382094144821167,
              right: 0.913857638835907,
              bottom: 0.7146354913711548,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03015509992837906,
              top: 0.39035764336586,
              right: 0.9151190519332886,
              bottom: 0.7122886180877686,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028547171503305435,
              top: 0.38790592551231384,
              right: 0.917100191116333,
              bottom: 0.7150930166244507,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02666257694363594,
              top: 0.38669249415397644,
              right: 0.919431746006012,
              bottom: 0.7338868975639343,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026551861315965652,
              top: 0.39058423042297363,
              right: 0.9185977578163147,
              bottom: 0.7336779236793518,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02941308356821537,
              top: 0.3973591923713684,
              right: 0.9122936725616455,
              bottom: 0.7152326107025146,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025451965630054474,
              top: 0.38946548104286194,
              right: 0.9189509153366089,
              bottom: 0.7331621646881104,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029300140216946602,
              top: 0.3973681628704071,
              right: 0.9135664701461792,
              bottom: 0.7126613259315491,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02870265766978264,
              top: 0.39156803488731384,
              right: 0.9140087366104126,
              bottom: 0.7124862670898438,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.024988438934087753,
              top: 0.384274959564209,
              right: 0.9188795685768127,
              bottom: 0.7321984171867371,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02412237599492073,
              top: 0.39031878113746643,
              right: 0.921016275882721,
              bottom: 0.7373613119125366,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02890501730144024,
              top: 0.39370349049568176,
              right: 0.9176907539367676,
              bottom: 0.736007809638977,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02894991636276245,
              top: 0.39412012696266174,
              right: 0.9167481660842896,
              bottom: 0.7402582764625549,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034018319100141525,
              top: 0.400414377450943,
              right: 0.9113864302635193,
              bottom: 0.7173541784286499,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027753273025155067,
              top: 0.39152342081069946,
              right: 0.9164138436317444,
              bottom: 0.7330032587051392,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029465120285749435,
              top: 0.3956248164176941,
              right: 0.9131617546081543,
              bottom: 0.7154925465583801,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027515467256307602,
              top: 0.38899293541908264,
              right: 0.9159480333328247,
              bottom: 0.71757572889328,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026585262268781662,
              top: 0.38847705721855164,
              right: 0.9164100289344788,
              bottom: 0.7192453742027283,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.023533878847956657,
              top: 0.3735297620296478,
              right: 0.9264894127845764,
              bottom: 0.7936381697654724,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029904451221227646,
              top: 0.3967021107673645,
              right: 0.9231439232826233,
              bottom: 0.7759348750114441,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.014944429509341717,
              top: 0.38508665561676025,
              right: 0.9465110898017883,
              bottom: 0.8199224472045898,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03236063942313194,
              top: 0.4070774018764496,
              right: 0.9304711818695068,
              bottom: 0.788744330406189,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034248750656843185,
              top: 0.40891188383102417,
              right: 0.9240577220916748,
              bottom: 0.7459745407104492,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03232034668326378,
              top: 0.38744261860847473,
              right: 0.9260372519493103,
              bottom: 0.7632810473442078,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03361502289772034,
              top: 0.39045044779777527,
              right: 0.9226833581924438,
              bottom: 0.7423399686813354,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03238515555858612,
              top: 0.3856438100337982,
              right: 0.9224525094032288,
              bottom: 0.7379004955291748,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03605569899082184,
              top: 0.3877315819263458,
              right: 0.9150857329368591,
              bottom: 0.7145344614982605,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03274605795741081,
              top: 0.38223734498023987,
              right: 0.9156392812728882,
              bottom: 0.7077431678771973,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032667092978954315,
              top: 0.37667372822761536,
              right: 0.9161274433135986,
              bottom: 0.7184371948242188,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03402188420295715,
              top: 0.3814808428287506,
              right: 0.9145270586013794,
              bottom: 0.7145488262176514,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032893843948841095,
              top: 0.38048726320266724,
              right: 0.9168952107429504,
              bottom: 0.7215955853462219,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035652972757816315,
              top: 0.3822108805179596,
              right: 0.9161025881767273,
              bottom: 0.7173632979393005,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037300724536180496,
              top: 0.38562795519828796,
              right: 0.9142386317253113,
              bottom: 0.708911657333374,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03664068877696991,
              top: 0.38451087474823,
              right: 0.9159101247787476,
              bottom: 0.7101163864135742,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03421574831008911,
              top: 0.3791167140007019,
              right: 0.9206475019454956,
              bottom: 0.7368695735931396,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034222424030303955,
              top: 0.386893630027771,
              right: 0.9213716983795166,
              bottom: 0.7347660064697266,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039730604737997055,
              top: 0.3920586407184601,
              right: 0.9153221845626831,
              bottom: 0.7151461243629456,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03515458479523659,
              top: 0.3844846785068512,
              right: 0.9193196296691895,
              bottom: 0.7258418798446655,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03306972235441208,
              top: 0.3825370967388153,
              right: 0.9215303063392639,
              bottom: 0.7369126677513123,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030927220359444618,
              top: 0.38530096411705017,
              right: 0.9233317375183105,
              bottom: 0.7366551160812378,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02972373366355896,
              top: 0.3791132867336273,
              right: 0.9259868860244751,
              bottom: 0.7693066000938416,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030527779832482338,
              top: 0.3846140503883362,
              right: 0.9266077280044556,
              bottom: 0.787877082824707,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03247082605957985,
              top: 0.39409226179122925,
              right: 0.9258960485458374,
              bottom: 0.7806604504585266,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033064547926187515,
              top: 0.39254406094551086,
              right: 0.9265861511230469,
              bottom: 0.7828676700592041,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031084010377526283,
              top: 0.3930060565471649,
              right: 0.928231954574585,
              bottom: 0.786811351776123,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029223985970020294,
              top: 0.3921852707862854,
              right: 0.9303857684135437,
              bottom: 0.7966666221618652,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028039611876010895,
              top: 0.39387863874435425,
              right: 0.9335282444953918,
              bottom: 0.7932502627372742,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03603842109441757,
              top: 0.4027728736400604,
              right: 0.9240489602088928,
              bottom: 0.7528810501098633,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027206487953662872,
              top: 0.387667179107666,
              right: 0.9315142035484314,
              bottom: 0.7806414365768433,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02816045470535755,
              top: 0.39281564950942993,
              right: 0.9282515645027161,
              bottom: 0.7734400033950806,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02555854618549347,
              top: 0.3925400972366333,
              right: 0.930503249168396,
              bottom: 0.7849739789962769,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03354170545935631,
              top: 0.3982718288898468,
              right: 0.9235242009162903,
              bottom: 0.771391749382019,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029173320159316063,
              top: 0.3882945477962494,
              right: 0.9311176538467407,
              bottom: 0.8008949756622314,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03307220712304115,
              top: 0.3970019221305847,
              right: 0.9259260296821594,
              bottom: 0.7846367359161377,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.043928224593400955,
              top: 0.3921376168727875,
              right: 0.9212355017662048,
              bottom: 0.7882746458053589,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.056584496051073074,
              top: 0.3952200412750244,
              right: 0.9185539484024048,
              bottom: 0.7798763513565063,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07197002321481705,
              top: 0.39114898443222046,
              right: 0.9227517247200012,
              bottom: 0.7766817808151245,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09045030176639557,
              top: 0.38752856850624084,
              right: 0.9244744181632996,
              bottom: 0.7799855470657349,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1097504124045372,
              top: 0.3844851553440094,
              right: 0.9268688559532166,
              bottom: 0.7929180264472961,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1295086145401001,
              top: 0.38712888956069946,
              right: 0.9287131428718567,
              bottom: 0.7986387610435486,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14768409729003906,
              top: 0.397285521030426,
              right: 0.9275035262107849,
              bottom: 0.7625125050544739,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16087810695171356,
              top: 0.39529916644096375,
              right: 0.9258405566215515,
              bottom: 0.7426561117172241,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1668815165758133,
              top: 0.39368337392807007,
              right: 0.9244771003723145,
              bottom: 0.729318380355835,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16987372934818268,
              top: 0.3837936520576477,
              right: 0.9305681586265564,
              bottom: 0.7484082579612732,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18716390430927277,
              top: 0.39096128940582275,
              right: 0.9263299107551575,
              bottom: 0.7376285791397095,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19175224006175995,
              top: 0.3846164047718048,
              right: 0.9282845258712769,
              bottom: 0.7512043118476868,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20615313947200775,
              top: 0.382310688495636,
              right: 0.9239183664321899,
              bottom: 0.7801371812820435,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21402691304683685,
              top: 0.39470773935317993,
              right: 0.9242399334907532,
              bottom: 0.7696592211723328,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22540602087974548,
              top: 0.4005585312843323,
              right: 0.9231089353561401,
              bottom: 0.7546474933624268,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2126142680644989,
              top: 0.40323543548583984,
              right: 0.9272069931030273,
              bottom: 0.7211081981658936,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.217829167842865,
              top: 0.39605966210365295,
              right: 0.9222720861434937,
              bottom: 0.7080428600311279,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2229863703250885,
              top: 0.38954630494117737,
              right: 0.9189714193344116,
              bottom: 0.7080651521682739,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22988179326057434,
              top: 0.394380122423172,
              right: 0.9121344089508057,
              bottom: 0.6856902837753296,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21496322751045227,
              top: 0.39103174209594727,
              right: 0.9175221920013428,
              bottom: 0.6827915906906128,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2224397361278534,
              top: 0.3903816342353821,
              right: 0.9105807542800903,
              bottom: 0.6787989139556885,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2084207534790039,
              top: 0.38819998502731323,
              right: 0.9216374754905701,
              bottom: 0.6868837475776672,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2053496092557907,
              top: 0.39209336042404175,
              right: 0.9185789227485657,
              bottom: 0.6852097511291504,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1927422136068344,
              top: 0.3911656439304352,
              right: 0.9206506013870239,
              bottom: 0.6917333602905273,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1961057037115097,
              top: 0.39452630281448364,
              right: 0.9228695631027222,
              bottom: 0.6972763538360596,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2063610553741455,
              top: 0.39490771293640137,
              right: 0.9236435294151306,
              bottom: 0.6966052651405334,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20797961950302124,
              top: 0.3962131142616272,
              right: 0.9252620935440063,
              bottom: 0.6979106664657593,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2219926416873932,
              top: 0.39302921295166016,
              right: 0.918961763381958,
              bottom: 0.6885100603103638,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2107667177915573,
              top: 0.3924666941165924,
              right: 0.9210264086723328,
              bottom: 0.6865502595901489,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2298661321401596,
              top: 0.3924841284751892,
              right: 0.9113473892211914,
              bottom: 0.6842948198318481,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2275783121585846,
              top: 0.38645046949386597,
              right: 0.9185172319412231,
              bottom: 0.7074751853942871,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22927743196487427,
              top: 0.3924388885498047,
              right: 0.9148080945014954,
              bottom: 0.7003645896911621,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19318345189094543,
              top: 0.38762369751930237,
              right: 0.9276537895202637,
              bottom: 0.7242289781570435,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.159180149435997,
              top: 0.39393290877342224,
              right: 0.9295786619186401,
              bottom: 0.7249821424484253,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11007413268089294,
              top: 0.39618003368377686,
              right: 0.931510329246521,
              bottom: 0.7230061292648315,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12577226758003235,
              top: 0.400020033121109,
              right: 0.903274655342102,
              bottom: 0.705761194229126,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1518024206161499,
              top: 0.3973923325538635,
              right: 0.8961009979248047,
              bottom: 0.696557879447937,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15016776323318481,
              top: 0.38451316952705383,
              right: 0.9187851548194885,
              bottom: 0.7410383224487305,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20420801639556885,
              top: 0.4024108350276947,
              right: 0.9011854529380798,
              bottom: 0.7073671817779541,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22458544373512268,
              top: 0.3956971764564514,
              right: 0.9116523265838623,
              bottom: 0.7077438235282898,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.216364324092865,
              top: 0.38932543992996216,
              right: 0.9256811738014221,
              bottom: 0.7251694798469543,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21228459477424622,
              top: 0.39709335565567017,
              right: 0.9211318492889404,
              bottom: 0.7067357301712036,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19133532047271729,
              top: 0.39191052317619324,
              right: 0.9269798398017883,
              bottom: 0.7109004259109497,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1925215721130371,
              top: 0.3912697434425354,
              right: 0.9172970056533813,
              bottom: 0.7080872058868408,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19344033300876617,
              top: 0.39180755615234375,
              right: 0.9171552062034607,
              bottom: 0.7067531943321228,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18652409315109253,
              top: 0.39134466648101807,
              right: 0.9216033220291138,
              bottom: 0.7086223363876343,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18286024034023285,
              top: 0.39195504784584045,
              right: 0.91921067237854,
              bottom: 0.7067158222198486,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1894172579050064,
              top: 0.3928084671497345,
              right: 0.9141793847084045,
              bottom: 0.7019655704498291,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17908897995948792,
              top: 0.3840281367301941,
              right: 0.9218887090682983,
              bottom: 0.7272815108299255,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16621510684490204,
              top: 0.3926401436328888,
              right: 0.9239991307258606,
              bottom: 0.7170602083206177,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1679682582616806,
              top: 0.39316460490226746,
              right: 0.9178256392478943,
              bottom: 0.7126096487045288,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1689537912607193,
              top: 0.3939327299594879,
              right: 0.9134266972541809,
              bottom: 0.707287073135376,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1543186455965042,
              top: 0.3823828399181366,
              right: 0.9247471690177917,
              bottom: 0.7407757043838501,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1623355895280838,
              top: 0.3979574143886566,
              right: 0.9140089750289917,
              bottom: 0.7112851738929749,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1833234429359436,
              top: 0.39710187911987305,
              right: 0.9033412933349609,
              bottom: 0.6979838609695435,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17343726754188538,
              top: 0.391216516494751,
              right: 0.9156341552734375,
              bottom: 0.6970803737640381,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17645616829395294,
              top: 0.39065030217170715,
              right: 0.9165195822715759,
              bottom: 0.6949549317359924,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16822177171707153,
              top: 0.38658609986305237,
              right: 0.926065981388092,
              bottom: 0.7054139375686646,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1736035943031311,
              top: 0.39112377166748047,
              right: 0.9222012758255005,
              bottom: 0.7007593512535095,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18568307161331177,
              top: 0.3923611044883728,
              right: 0.9156190752983093,
              bottom: 0.6955152153968811,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18362830579280853,
              top: 0.3917267620563507,
              right: 0.9196237325668335,
              bottom: 0.6976801156997681,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19197975099086761,
              top: 0.3937763273715973,
              right: 0.9128490090370178,
              bottom: 0.6929086446762085,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19182509183883667,
              top: 0.3929375410079956,
              right: 0.9128163456916809,
              bottom: 0.6900071501731873,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18455392122268677,
              top: 0.38939911127090454,
              right: 0.9197351336479187,
              bottom: 0.6997313499450684,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18314452469348907,
              top: 0.3874155879020691,
              right: 0.9220911264419556,
              bottom: 0.709970235824585,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19077244400978088,
              top: 0.3951071500778198,
              right: 0.9152599573135376,
              bottom: 0.6997994184494019,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18903452157974243,
              top: 0.3944491446018219,
              right: 0.9158693552017212,
              bottom: 0.6994574666023254,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18467894196510315,
              top: 0.39429834485054016,
              right: 0.9151958227157593,
              bottom: 0.6981984972953796,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17949198186397552,
              top: 0.39245256781578064,
              right: 0.9163029789924622,
              bottom: 0.7029839754104614,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17777299880981445,
              top: 0.3923549950122833,
              right: 0.9162031412124634,
              bottom: 0.7013273239135742,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18238230049610138,
              top: 0.3941406309604645,
              right: 0.9120002388954163,
              bottom: 0.6976629495620728,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1830480396747589,
              top: 0.39347243309020996,
              right: 0.9155517816543579,
              bottom: 0.6993050575256348,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18036828935146332,
              top: 0.3892247676849365,
              right: 0.9241436719894409,
              bottom: 0.7189650535583496,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18629752099514008,
              top: 0.39346155524253845,
              right: 0.9231613278388977,
              bottom: 0.7166372537612915,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19313737750053406,
              top: 0.3959057927131653,
              right: 0.9209749698638916,
              bottom: 0.7156308889389038,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2022026777267456,
              top: 0.3970339894294739,
              right: 0.914071261882782,
              bottom: 0.7020238637924194,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20737998187541962,
              top: 0.3926892578601837,
              right: 0.9153170585632324,
              bottom: 0.7080467939376831,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2080950140953064,
              top: 0.3929104804992676,
              right: 0.9163057208061218,
              bottom: 0.7068243622779846,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20365186035633087,
              top: 0.3885160982608795,
              right: 0.9197888970375061,
              bottom: 0.7111355066299438,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20945942401885986,
              top: 0.39096885919570923,
              right: 0.9161171913146973,
              bottom: 0.7023047208786011,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20517580211162567,
              top: 0.3855348825454712,
              right: 0.9213966131210327,
              bottom: 0.7053788304328918,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22731436789035797,
              top: 0.3900947570800781,
              right: 0.9144077301025391,
              bottom: 0.7024918794631958,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22449856996536255,
              top: 0.38532212376594543,
              right: 0.9210798144340515,
              bottom: 0.7258507013320923,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20355750620365143,
              top: 0.39601609110832214,
              right: 0.9271400570869446,
              bottom: 0.7108011841773987,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16849489510059357,
              top: 0.3970034122467041,
              right: 0.9260203242301941,
              bottom: 0.6981353759765625,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1258404701948166,
              top: 0.38862618803977966,
              right: 0.9311730265617371,
              bottom: 0.7103555798530579,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12713269889354706,
              top: 0.3838824927806854,
              right: 0.9204349517822266,
              bottom: 0.7321603298187256,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1152166873216629,
              top: 0.38756129145622253,
              right: 0.920796275138855,
              bottom: 0.731082558631897,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07639622688293457,
              top: 0.3843310475349426,
              right: 0.9279678463935852,
              bottom: 0.7515212297439575,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06803277879953384,
              top: 0.3818398416042328,
              right: 0.9246909618377686,
              bottom: 0.781948447227478,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11830151826143265,
              top: 0.39955490827560425,
              right: 0.9049312472343445,
              bottom: 0.7458527088165283,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11479584127664566,
              top: 0.38834792375564575,
              right: 0.9176694750785828,
              bottom: 0.7606766223907471,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13206923007965088,
              top: 0.399617999792099,
              right: 0.9159548282623291,
              bottom: 0.7264396548271179,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16214683651924133,
              top: 0.3867815136909485,
              right: 0.915152907371521,
              bottom: 0.7469012141227722,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.20415206253528595,
              top: 0.396316260099411,
              right: 0.90749591588974,
              bottom: 0.7117440104484558,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23433806002140045,
              top: 0.3935645818710327,
              right: 0.91357421875,
              bottom: 0.69758141040802,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23514576256275177,
              top: 0.3889971375465393,
              right: 0.9268385767936707,
              bottom: 0.7091842293739319,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2756726145744324,
              top: 0.3742848336696625,
              right: 0.922009289264679,
              bottom: 0.7627887725830078,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3582092225551605,
              top: 0.38206517696380615,
              right: 0.9153168201446533,
              bottom: 0.7813146114349365,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2654187083244324,
              top: 0.386448472738266,
              right: 0.9426265954971313,
              bottom: 0.7740092277526855,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19740702211856842,
              top: 0.38417676091194153,
              right: 0.9578736424446106,
              bottom: 0.8091030120849609,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1200285330414772,
              top: 0.3842315971851349,
              right: 0.9640284776687622,
              bottom: 0.8187720775604248,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11594294011592865,
              top: 0.39025184512138367,
              right: 0.9198889136314392,
              bottom: 0.8206539154052734,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09428951889276505,
              top: 0.39637291431427,
              right: 0.8982354998588562,
              bottom: 0.8267749547958374,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07263610512018204,
              top: 0.40249398350715637,
              right: 0.8765820860862732,
              bottom: 0.8328959941864014,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025088267400860786,
              top: 0.4086712598800659,
              right: 0.956283450126648,
              bottom: 0.7273703813552856,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05957718566060066,
              top: 0.39727112650871277,
              right: 0.8337633013725281,
              bottom: 0.7004818320274353,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04822748899459839,
              top: 0.38900989294052124,
              right: 0.7548003196716309,
              bottom: 0.6866422891616821,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.024882115423679352,
              top: 0.3848155438899994,
              right: 0.7497876882553101,
              bottom: 0.6909463405609131,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.015684453770518303,
              top: 0.38380542397499084,
              right: 0.7791292667388916,
              bottom: 0.6938239336013794,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.017084136605262756,
              top: 0.38175854086875916,
              right: 0.8168847560882568,
              bottom: 0.7013113498687744,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028546420857310295,
              top: 0.3849191963672638,
              right: 0.8653270602226257,
              bottom: 0.7016189098358154,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03524070978164673,
              top: 0.38399502635002136,
              right: 0.9003846049308777,
              bottom: 0.7091690897941589,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04483901709318161,
              top: 0.3868246376514435,
              right: 0.9165629148483276,
              bottom: 0.7098274230957031,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05205078423023224,
              top: 0.38680294156074524,
              right: 0.9176445603370667,
              bottom: 0.7141963243484497,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.048169493675231934,
              top: 0.38712772727012634,
              right: 0.9210179448127747,
              bottom: 0.7200411558151245,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.047375258058309555,
              top: 0.3885537087917328,
              right: 0.9201831221580505,
              bottom: 0.7180870175361633,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04190993309020996,
              top: 0.3845497965812683,
              right: 0.9237436056137085,
              bottom: 0.7315154075622559,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.040233295410871506,
              top: 0.38646048307418823,
              right: 0.9213946461677551,
              bottom: 0.7348924279212952,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04416777566075325,
              top: 0.391242116689682,
              right: 0.911368727684021,
              bottom: 0.7195401191711426,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0293834637850523,
              top: 0.37191757559776306,
              right: 0.9303637146949768,
              bottom: 0.7937865257263184,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032343246042728424,
              top: 0.39383724331855774,
              right: 0.9286261200904846,
              bottom: 0.7824937105178833,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03205355629324913,
              top: 0.39595547318458557,
              right: 0.9264782667160034,
              bottom: 0.7857339382171631,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03482493385672569,
              top: 0.40045085549354553,
              right: 0.9230382442474365,
              bottom: 0.7639430165290833,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03865706920623779,
              top: 0.39864981174468994,
              right: 0.9190552830696106,
              bottom: 0.7450013160705566,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032022181898355484,
              top: 0.38145241141319275,
              right: 0.9243265986442566,
              bottom: 0.7742601037025452,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03433949500322342,
              top: 0.38849687576293945,
              right: 0.9220312833786011,
              bottom: 0.7638642191886902,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033816225826740265,
              top: 0.3864503502845764,
              right: 0.9222638607025146,
              bottom: 0.7751104831695557,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037942007184028625,
              top: 0.3946078419685364,
              right: 0.9146645069122314,
              bottom: 0.7461480498313904,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03981748968362808,
              top: 0.3923625648021698,
              right: 0.9093489050865173,
              bottom: 0.7300492525100708,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0376664474606514,
              top: 0.3864160180091858,
              right: 0.9101553559303284,
              bottom: 0.7252213954925537,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03397289663553238,
              top: 0.38556814193725586,
              right: 0.9197136163711548,
              bottom: 0.7276464700698853,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03709746152162552,
              top: 0.3900804817676544,
              right: 0.9200323224067688,
              bottom: 0.7151950597763062,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03872280567884445,
              top: 0.3864502012729645,
              right: 0.9184738397598267,
              bottom: 0.7168402671813965,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03569306805729866,
              top: 0.3858722150325775,
              right: 0.9243314266204834,
              bottom: 0.7385184168815613,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0324111133813858,
              top: 0.3895162045955658,
              right: 0.9279241561889648,
              bottom: 0.7676012516021729,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03443925827741623,
              top: 0.40545853972435,
              right: 0.9252962470054626,
              bottom: 0.749840497970581,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035141438245773315,
              top: 0.4094887673854828,
              right: 0.9268525838851929,
              bottom: 0.7227479219436646,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03375357761979103,
              top: 0.3986966907978058,
              right: 0.9309400320053101,
              bottom: 0.7239501476287842,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03698286414146423,
              top: 0.3962383270263672,
              right: 0.9269084930419922,
              bottom: 0.7173763513565063,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03353476524353027,
              top: 0.3914065957069397,
              right: 0.9299421906471252,
              bottom: 0.7340851426124573,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035175926983356476,
              top: 0.39848417043685913,
              right: 0.9300616383552551,
              bottom: 0.718307375907898,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03468625620007515,
              top: 0.39615005254745483,
              right: 0.9283837080001831,
              bottom: 0.7179713845252991,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04399571567773819,
              top: 0.39697742462158203,
              right: 0.928813636302948,
              bottom: 0.7194423675537109,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04382874071598053,
              top: 0.39727509021759033,
              right: 0.9347883462905884,
              bottom: 0.7310413122177124,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0394817553460598,
              top: 0.3982757031917572,
              right: 0.932895302772522,
              bottom: 0.7387428283691406,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03691308945417404,
              top: 0.39875003695487976,
              right: 0.9335904121398926,
              bottom: 0.7389528751373291,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03738853707909584,
              top: 0.39447617530822754,
              right: 0.9274683594703674,
              bottom: 0.7453881502151489,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03427530825138092,
              top: 0.39532670378685,
              right: 0.9261080026626587,
              bottom: 0.745864748954773,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03676481917500496,
              top: 0.39901232719421387,
              right: 0.9198352098464966,
              bottom: 0.7266868352890015,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038960862904787064,
              top: 0.3933994472026825,
              right: 0.9126156568527222,
              bottom: 0.7161004543304443,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032014399766922,
              top: 0.38434651494026184,
              right: 0.9216266870498657,
              bottom: 0.7408976554870605,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03927277401089668,
              top: 0.3968976140022278,
              right: 0.913355827331543,
              bottom: 0.7130293846130371,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03674107789993286,
              top: 0.39124780893325806,
              right: 0.9189087152481079,
              bottom: 0.7192760705947876,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03553019464015961,
              top: 0.3905389606952667,
              right: 0.9197150468826294,
              bottom: 0.7177258133888245,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03718535229563713,
              top: 0.38675445318222046,
              right: 0.9172014594078064,
              bottom: 0.7133758068084717,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03800424933433533,
              top: 0.3879283666610718,
              right: 0.9177643060684204,
              bottom: 0.7051369547843933,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037575677037239075,
              top: 0.3815848231315613,
              right: 0.9220994114875793,
              bottom: 0.7049233317375183,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037560317665338516,
              top: 0.380986750125885,
              right: 0.9275965690612793,
              bottom: 0.7097147703170776,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04271896556019783,
              top: 0.37830203771591187,
              right: 0.931512713432312,
              bottom: 0.733932375907898,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04101702943444252,
              top: 0.3893232047557831,
              right: 0.9318872094154358,
              bottom: 0.7176879644393921,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03178751468658447,
              top: 0.3762214779853821,
              right: 0.9414045810699463,
              bottom: 0.7681707739830017,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03495459631085396,
              top: 0.392789751291275,
              right: 0.9353617429733276,
              bottom: 0.7597627639770508,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03399613872170448,
              top: 0.3929612636566162,
              right: 0.9368626475334167,
              bottom: 0.7618821859359741,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03306484967470169,
              top: 0.39105701446533203,
              right: 0.9387418031692505,
              bottom: 0.7749659419059753,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0312020406126976,
              top: 0.39229053258895874,
              right: 0.944068968296051,
              bottom: 0.7851212620735168,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03309350088238716,
              top: 0.39859139919281006,
              right: 0.9455398917198181,
              bottom: 0.7499415278434753,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03209826350212097,
              top: 0.38575708866119385,
              right: 0.9453760385513306,
              bottom: 0.7721381187438965,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03459596261382103,
              top: 0.3812267780303955,
              right: 0.9517475366592407,
              bottom: 0.8020938038825989,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03571023792028427,
              top: 0.3952576220035553,
              right: 0.9449511170387268,
              bottom: 0.7825037240982056,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03753436729311943,
              top: 0.3990658223628998,
              right: 0.9381686449050903,
              bottom: 0.7375187873840332,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03669179975986481,
              top: 0.39070579409599304,
              right: 0.9369284510612488,
              bottom: 0.7206752896308899,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034553688019514084,
              top: 0.38136327266693115,
              right: 0.9403184056282043,
              bottom: 0.7231205701828003,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037306301295757294,
              top: 0.3833366334438324,
              right: 0.9369712471961975,
              bottom: 0.7084500789642334,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035716135054826736,
              top: 0.38084855675697327,
              right: 0.9386411309242249,
              bottom: 0.7102948427200317,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03578655794262886,
              top: 0.37717515230178833,
              right: 0.9392087459564209,
              bottom: 0.7268505692481995,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036409374326467514,
              top: 0.3811236023902893,
              right: 0.9397585391998291,
              bottom: 0.7331690788269043,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03737518563866615,
              top: 0.38898298144340515,
              right: 0.9396862983703613,
              bottom: 0.7171862125396729,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038989413529634476,
              top: 0.3867760896682739,
              right: 0.935278594493866,
              bottom: 0.7122578024864197,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03751447796821594,
              top: 0.3814946413040161,
              right: 0.9358872175216675,
              bottom: 0.7187259197235107,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.041297122836112976,
              top: 0.37761226296424866,
              right: 0.9397683143615723,
              bottom: 0.7455662488937378,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03974149748682976,
              top: 0.39259159564971924,
              right: 0.9379703998565674,
              bottom: 0.721599817276001,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03797078877687454,
              top: 0.38998040556907654,
              right: 0.9373583197593689,
              bottom: 0.7167938947677612,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03407212346792221,
              top: 0.3818548917770386,
              right: 0.9412535429000854,
              bottom: 0.7292649745941162,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03997191786766052,
              top: 0.387972354888916,
              right: 0.933598518371582,
              bottom: 0.7153937816619873,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037124186754226685,
              top: 0.38306325674057007,
              right: 0.9371122121810913,
              bottom: 0.7208467721939087,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03800181671977043,
              top: 0.3877825140953064,
              right: 0.9362584948539734,
              bottom: 0.7127392292022705,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0453181117773056,
              top: 0.38059842586517334,
              right: 0.9411818981170654,
              bottom: 0.7400125861167908,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04055504873394966,
              top: 0.3929782211780548,
              right: 0.9438233375549316,
              bottom: 0.7207056879997253,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.048236750066280365,
              top: 0.38871821761131287,
              right: 0.9427693486213684,
              bottom: 0.7311592698097229,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04009399935603142,
              top: 0.391055166721344,
              right: 0.9442542195320129,
              bottom: 0.7324459552764893,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04781477153301239,
              top: 0.39112788438796997,
              right: 0.9443443417549133,
              bottom: 0.7375775575637817,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.053104426711797714,
              top: 0.3978939950466156,
              right: 0.942974328994751,
              bottom: 0.7188981175422668,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.043247681111097336,
              top: 0.39098525047302246,
              right: 0.9396610260009766,
              bottom: 0.7236766815185547,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03912174701690674,
              top: 0.39398428797721863,
              right: 0.9308189749717712,
              bottom: 0.7118179798126221,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.045365434139966965,
              top: 0.3880203068256378,
              right: 0.9295404553413391,
              bottom: 0.7273796796798706,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0375460647046566,
              top: 0.39291274547576904,
              right: 0.9327007532119751,
              bottom: 0.730290949344635,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039262156933546066,
              top: 0.39948704838752747,
              right: 0.9254617094993591,
              bottom: 0.7112431526184082,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03962189331650734,
              top: 0.3966625928878784,
              right: 0.9213958382606506,
              bottom: 0.7089310884475708,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03605525568127632,
              top: 0.39544591307640076,
              right: 0.9225307703018188,
              bottom: 0.7109294533729553,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03709237277507782,
              top: 0.39389804005622864,
              right: 0.9212062358856201,
              bottom: 0.7145086526870728,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03993695229291916,
              top: 0.38447293639183044,
              right: 0.9314082264900208,
              bottom: 0.7578461170196533,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03722219169139862,
              top: 0.3958580195903778,
              right: 0.9330365657806396,
              bottom: 0.7558255195617676,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03963621333241463,
              top: 0.4054649770259857,
              right: 0.9273651242256165,
              bottom: 0.7247446775436401,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037249330431222916,
              top: 0.39858120679855347,
              right: 0.9282916188240051,
              bottom: 0.7154706716537476,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03448110446333885,
              top: 0.3942345678806305,
              right: 0.9300846457481384,
              bottom: 0.7199852466583252,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035491399466991425,
              top: 0.3934105932712555,
              right: 0.9272934198379517,
              bottom: 0.7260821461677551,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.042242102324962616,
              top: 0.3953923285007477,
              right: 0.9302104711532593,
              bottom: 0.7201817035675049,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04610170051455498,
              top: 0.39602023363113403,
              right: 0.9334978461265564,
              bottom: 0.7127757668495178,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04466314986348152,
              top: 0.3866482973098755,
              right: 0.9377881288528442,
              bottom: 0.7353951930999756,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.045501019805669785,
              top: 0.3890882432460785,
              right: 0.9382401704788208,
              bottom: 0.7467308640480042,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.040303733199834824,
              top: 0.3969804346561432,
              right: 0.9350523352622986,
              bottom: 0.737751305103302,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038644954562187195,
              top: 0.38893574476242065,
              right: 0.9395012259483337,
              bottom: 0.7630083560943604,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03765476867556572,
              top: 0.3887805640697479,
              right: 0.9433890581130981,
              bottom: 0.7873612642288208,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038349125534296036,
              top: 0.39535799622535706,
              right: 0.9414902329444885,
              bottom: 0.7858762145042419,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03860355541110039,
              top: 0.38919225335121155,
              right: 0.9454203248023987,
              bottom: 0.8083307147026062,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04137237370014191,
              top: 0.39461416006088257,
              right: 0.9435837864875793,
              bottom: 0.8054613471031189,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0327177532017231,
              top: 0.3893352746963501,
              right: 0.9497898817062378,
              bottom: 0.8241709470748901,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03112889640033245,
              top: 0.3918897807598114,
              right: 0.948262095451355,
              bottom: 0.8333187103271484,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03915068507194519,
              top: 0.40009376406669617,
              right: 0.9411859512329102,
              bottom: 0.8102537393569946,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032659824937582016,
              top: 0.39102402329444885,
              right: 0.9471204876899719,
              bottom: 0.8229771256446838,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032071802765131,
              top: 0.39977216720581055,
              right: 0.9386195540428162,
              bottom: 0.8050605654716492,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0302629042416811,
              top: 0.3966135084629059,
              right: 0.933320164680481,
              bottom: 0.8074451684951782,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031211987137794495,
              top: 0.3992159962654114,
              right: 0.9297857880592346,
              bottom: 0.7914249897003174,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02971356362104416,
              top: 0.39288994669914246,
              right: 0.9295717477798462,
              bottom: 0.7945973873138428,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02898336760699749,
              top: 0.39297235012054443,
              right: 0.9319886565208435,
              bottom: 0.8001902103424072,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03422823175787926,
              top: 0.404651403427124,
              right: 0.9262060523033142,
              bottom: 0.7556656002998352,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03635343164205551,
              top: 0.39713799953460693,
              right: 0.9239853024482727,
              bottom: 0.7418469190597534,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.040284790098667145,
              top: 0.39001762866973877,
              right: 0.923749566078186,
              bottom: 0.7394293546676636,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03134356811642647,
              top: 0.37928131222724915,
              right: 0.9327738285064697,
              bottom: 0.7818711400032043,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03306116908788681,
              top: 0.3907794654369354,
              right: 0.930339515209198,
              bottom: 0.7791347503662109,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03158607706427574,
              top: 0.3942910134792328,
              right: 0.9311149716377258,
              bottom: 0.7842535972595215,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03305782005190849,
              top: 0.4021090567111969,
              right: 0.9278648495674133,
              bottom: 0.7583882808685303,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032336849719285965,
              top: 0.3966990113258362,
              right: 0.9285205602645874,
              bottom: 0.7567979097366333,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035047877579927444,
              top: 0.38541004061698914,
              right: 0.9324935078620911,
              bottom: 0.7845323085784912,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030339885503053665,
              top: 0.38647881150245667,
              right: 0.9415640830993652,
              bottom: 0.8057594299316406,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03220386058092117,
              top: 0.3931182026863098,
              right: 0.9429134726524353,
              bottom: 0.8087890148162842,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037348873913288116,
              top: 0.39974549412727356,
              right: 0.9369845390319824,
              bottom: 0.786716103553772,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035086195915937424,
              top: 0.39987713098526,
              right: 0.9334909915924072,
              bottom: 0.7695528864860535,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03340759500861168,
              top: 0.3888234496116638,
              right: 0.9365816712379456,
              bottom: 0.7861524820327759,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029332051053643227,
              top: 0.3862018585205078,
              right: 0.9435107111930847,
              bottom: 0.8018932342529297,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031004302203655243,
              top: 0.39157962799072266,
              right: 0.942715048789978,
              bottom: 0.8012887239456177,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030818047001957893,
              top: 0.39240044355392456,
              right: 0.9456655979156494,
              bottom: 0.8110262155532837,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03077252395451069,
              top: 0.3918084502220154,
              right: 0.9479872584342957,
              bottom: 0.8207139372825623,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03151056170463562,
              top: 0.39579182863235474,
              right: 0.9469640254974365,
              bottom: 0.8166320323944092,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03188783675432205,
              top: 0.3960203230381012,
              right: 0.9477616548538208,
              bottom: 0.8131091594696045,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03455774113535881,
              top: 0.4001789689064026,
              right: 0.9411919116973877,
              bottom: 0.7916553020477295,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03550170734524727,
              top: 0.4025907516479492,
              right: 0.9318283200263977,
              bottom: 0.7582203149795532,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03275829926133156,
              top: 0.39374634623527527,
              right: 0.9288259744644165,
              bottom: 0.749854564666748,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028691045939922333,
              top: 0.38419368863105774,
              right: 0.9302937388420105,
              bottom: 0.7616287469863892,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02439793013036251,
              top: 0.3787078261375427,
              right: 0.9318453669548035,
              bottom: 0.7894600629806519,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028849612921476364,
              top: 0.39188072085380554,
              right: 0.9276999235153198,
              bottom: 0.7738754749298096,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.024744916707277298,
              top: 0.38594216108322144,
              right: 0.9311085343360901,
              bottom: 0.8040909767150879,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.029943035915493965,
              top: 0.3988017141819,
              right: 0.9268978834152222,
              bottom: 0.7894530296325684,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02856580540537834,
              top: 0.39600422978401184,
              right: 0.9290148019790649,
              bottom: 0.7980254292488098,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03127844259142876,
              top: 0.40350669622421265,
              right: 0.9288061857223511,
              bottom: 0.7691688537597656,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02612396888434887,
              top: 0.38504549860954285,
              right: 0.9354496598243713,
              bottom: 0.8119368553161621,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026747802272439003,
              top: 0.39373818039894104,
              right: 0.9351333975791931,
              bottom: 0.8120043277740479,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0316273495554924,
              top: 0.40243738889694214,
              right: 0.9309810400009155,
              bottom: 0.785286545753479,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03428389132022858,
              top: 0.3998328149318695,
              right: 0.9264231324195862,
              bottom: 0.7619606852531433,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031975485384464264,
              top: 0.3810834288597107,
              right: 0.9390072822570801,
              bottom: 0.7964174151420593,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034157101064920425,
              top: 0.39363881945610046,
              right: 0.9324702620506287,
              bottom: 0.7758448123931885,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03284677118062973,
              top: 0.3868422210216522,
              right: 0.9424577951431274,
              bottom: 0.8001348972320557,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037252046167850494,
              top: 0.4005304276943207,
              right: 0.9322503805160522,
              bottom: 0.778408408164978,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032241757959127426,
              top: 0.3933302164077759,
              right: 0.9317920804023743,
              bottom: 0.7970762252807617,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031917717307806015,
              top: 0.39930596947669983,
              right: 0.9288953542709351,
              bottom: 0.7853491306304932,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03051036223769188,
              top: 0.396898478269577,
              right: 0.9272837042808533,
              bottom: 0.7886297702789307,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02602548338472843,
              top: 0.3923121690750122,
              right: 0.931469202041626,
              bottom: 0.8007724285125732,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026668930426239967,
              top: 0.387499064207077,
              right: 0.9420874118804932,
              bottom: 0.8189741969108582,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032503463327884674,
              top: 0.398921400308609,
              right: 0.9315165281295776,
              bottom: 0.80565345287323,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03350549563765526,
              top: 0.40213242173194885,
              right: 0.9270663261413574,
              bottom: 0.7860833406448364,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03358228877186775,
              top: 0.39979755878448486,
              right: 0.9254058599472046,
              bottom: 0.7719205617904663,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030455272644758224,
              top: 0.3839960992336273,
              right: 0.9341384768486023,
              bottom: 0.7887790203094482,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030501479282975197,
              top: 0.3866689205169678,
              right: 0.9302927255630493,
              bottom: 0.7880131006240845,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03735137730836868,
              top: 0.39722108840942383,
              right: 0.9204445481300354,
              bottom: 0.742777943611145,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02729497291147709,
              top: 0.3796246349811554,
              right: 0.9301472306251526,
              bottom: 0.7911450862884521,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02815397083759308,
              top: 0.3914017379283905,
              right: 0.9300800561904907,
              bottom: 0.7905687093734741,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034851934760808945,
              top: 0.401038259267807,
              right: 0.9205018281936646,
              bottom: 0.7558873891830444,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0361609160900116,
              top: 0.3950706124305725,
              right: 0.9188327789306641,
              bottom: 0.7441494464874268,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03470895066857338,
              top: 0.3895840644836426,
              right: 0.9203733801841736,
              bottom: 0.7431043386459351,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030314942821860313,
              top: 0.3726848363876343,
              right: 0.937860369682312,
              bottom: 0.7924607396125793,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03521467372775078,
              top: 0.3803586959838867,
              right: 0.942372739315033,
              bottom: 0.8036060333251953,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036929525434970856,
              top: 0.39650648832321167,
              right: 0.932952880859375,
              bottom: 0.7939095497131348,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03679998219013214,
              top: 0.40203070640563965,
              right: 0.9272056221961975,
              bottom: 0.7701373100280762,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03378957509994507,
              top: 0.39491939544677734,
              right: 0.9269026517868042,
              bottom: 0.7773050665855408,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03002912923693657,
              top: 0.39216265082359314,
              right: 0.9296609163284302,
              bottom: 0.7868493795394897,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03152189776301384,
              top: 0.39439019560813904,
              right: 0.9257792830467224,
              bottom: 0.7806736826896667,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03184569627046585,
              top: 0.3947610557079315,
              right: 0.9245578646659851,
              bottom: 0.7723426818847656,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02703418955206871,
              top: 0.3847797214984894,
              right: 0.9298914670944214,
              bottom: 0.8079050779342651,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03227345645427704,
              top: 0.39947038888931274,
              right: 0.9252009987831116,
              bottom: 0.7852526903152466,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03661668300628662,
              top: 0.4027722179889679,
              right: 0.9195085167884827,
              bottom: 0.749131441116333,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03007223829627037,
              top: 0.3857699930667877,
              right: 0.9268054962158203,
              bottom: 0.7793686389923096,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03231009095907211,
              top: 0.390062153339386,
              right: 0.9258056879043579,
              bottom: 0.7769368290901184,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0353129543364048,
              top: 0.3975808918476105,
              right: 0.9227490425109863,
              bottom: 0.7561569809913635,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0361357256770134,
              top: 0.3955160081386566,
              right: 0.9195719957351685,
              bottom: 0.7353217601776123,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03321445360779762,
              top: 0.38577353954315186,
              right: 0.9227679371833801,
              bottom: 0.7514777183532715,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035645559430122375,
              top: 0.3886999487876892,
              right: 0.9206295609474182,
              bottom: 0.7453053593635559,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03182705491781235,
              top: 0.38529086112976074,
              right: 0.9259829521179199,
              bottom: 0.7625032663345337,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037677813321352005,
              top: 0.39235371351242065,
              right: 0.9181697964668274,
              bottom: 0.7411084175109863,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03723926842212677,
              top: 0.38912108540534973,
              right: 0.9195762872695923,
              bottom: 0.7350010871887207,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035189948976039886,
              top: 0.38453900814056396,
              right: 0.9225174188613892,
              bottom: 0.7423318028450012,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036608386784791946,
              top: 0.3890743553638458,
              right: 0.9185758233070374,
              bottom: 0.7349231839179993,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03414274379611015,
              top: 0.38610756397247314,
              right: 0.9207419157028198,
              bottom: 0.7524734735488892,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03589877113699913,
              top: 0.39202117919921875,
              right: 0.9188956618309021,
              bottom: 0.7389805316925049,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03438548371195793,
              top: 0.3892311155796051,
              right: 0.9215031266212463,
              bottom: 0.7404054403305054,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03776581957936287,
              top: 0.3901849091053009,
              right: 0.9192712903022766,
              bottom: 0.7313387989997864,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033413365483284,
              top: 0.3843664526939392,
              right: 0.9231808185577393,
              bottom: 0.7559946775436401,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03023194707930088,
              top: 0.38625413179397583,
              right: 0.9264993667602539,
              bottom: 0.7749536037445068,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034221574664115906,
              top: 0.39714154601097107,
              right: 0.9218083620071411,
              bottom: 0.7628343105316162,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030865497887134552,
              top: 0.3945241868495941,
              right: 0.9255008697509766,
              bottom: 0.7808321714401245,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03580304607748985,
              top: 0.40202030539512634,
              right: 0.9185997247695923,
              bottom: 0.7504098415374756,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028755487874150276,
              top: 0.38710278272628784,
              right: 0.9243832230567932,
              bottom: 0.78482985496521,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03493766114115715,
              top: 0.4020364284515381,
              right: 0.9187897443771362,
              bottom: 0.751250684261322,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028295565396547318,
              top: 0.3862370550632477,
              right: 0.9256588816642761,
              bottom: 0.7914050817489624,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03612923622131348,
              top: 0.40114662051200867,
              right: 0.9189203381538391,
              bottom: 0.7516787052154541,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03228286653757095,
              top: 0.3922695517539978,
              right: 0.9244722723960876,
              bottom: 0.7648392915725708,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0352691151201725,
              top: 0.3837485909461975,
              right: 0.9337852001190186,
              bottom: 0.7908735275268555,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04233194887638092,
              top: 0.39540794491767883,
              right: 0.9310656785964966,
              bottom: 0.7719355225563049,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04615798965096474,
              top: 0.39695820212364197,
              right: 0.9282428026199341,
              bottom: 0.7517827749252319,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04179855436086655,
              top: 0.3951219618320465,
              right: 0.9237337112426758,
              bottom: 0.7364458441734314,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04129645600914955,
              top: 0.3850001394748688,
              right: 0.9264141917228699,
              bottom: 0.7464295029640198,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03767097741365433,
              top: 0.38835105299949646,
              right: 0.9265152812004089,
              bottom: 0.7508785128593445,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03241923451423645,
              top: 0.3857800364494324,
              right: 0.9284244775772095,
              bottom: 0.7730967998504639,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036119502037763596,
              top: 0.3984072804450989,
              right: 0.9205968379974365,
              bottom: 0.7492296695709229,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03316629305481911,
              top: 0.39567726850509644,
              right: 0.9232234954833984,
              bottom: 0.7496349811553955,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03281285986304283,
              top: 0.38189008831977844,
              right: 0.9368240833282471,
              bottom: 0.7910165786743164,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03869600594043732,
              top: 0.39066070318222046,
              right: 0.9390457272529602,
              bottom: 0.788506269454956,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03919810801744461,
              top: 0.40156087279319763,
              right: 0.9327806830406189,
              bottom: 0.7635132074356079,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028802040964365005,
              top: 0.38337570428848267,
              right: 0.9471523761749268,
              bottom: 0.81212317943573,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03712991625070572,
              top: 0.3955426514148712,
              right: 0.9411069750785828,
              bottom: 0.7929154634475708,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038234151899814606,
              top: 0.39028093218803406,
              right: 0.9440852403640747,
              bottom: 0.7986552715301514,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033291082829236984,
              top: 0.38456225395202637,
              right: 0.9496772885322571,
              bottom: 0.8163995146751404,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03142613545060158,
              top: 0.3869791626930237,
              right: 0.9511899352073669,
              bottom: 0.8276612758636475,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03077835589647293,
              top: 0.3907087445259094,
              right: 0.9522789716720581,
              bottom: 0.8235869407653809,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02902923710644245,
              top: 0.38706663250923157,
              right: 0.9533154964447021,
              bottom: 0.8239415884017944,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04103648290038109,
              top: 0.39550840854644775,
              right: 0.9440321922302246,
              bottom: 0.7946460247039795,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03861796855926514,
              top: 0.3820771276950836,
              right: 0.9452112913131714,
              bottom: 0.8013577461242676,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04244840890169144,
              top: 0.3879348933696747,
              right: 0.9399613738059998,
              bottom: 0.7842994928359985,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0417497381567955,
              top: 0.3918348550796509,
              right: 0.9392921328544617,
              bottom: 0.7669559717178345,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04294569417834282,
              top: 0.39024022221565247,
              right: 0.9349505305290222,
              bottom: 0.7545321583747864,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037551213055849075,
              top: 0.3893122673034668,
              right: 0.9338810443878174,
              bottom: 0.7536650896072388,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.035955075174570084,
              top: 0.38215309381484985,
              right: 0.9388720393180847,
              bottom: 0.7852499485015869,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03560665249824524,
              top: 0.389055997133255,
              right: 0.9431983232498169,
              bottom: 0.7937296628952026,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03936026617884636,
              top: 0.39624524116516113,
              right: 0.9424111247062683,
              bottom: 0.7845364212989807,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04635014757514,
              top: 0.40668588876724243,
              right: 0.933687686920166,
              bottom: 0.742885947227478,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04758983850479126,
              top: 0.3954867720603943,
              right: 0.9349848628044128,
              bottom: 0.7431325912475586,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033956967294216156,
              top: 0.379383385181427,
              right: 0.9511154294013977,
              bottom: 0.7930442094802856,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03894674777984619,
              top: 0.39228615164756775,
              right: 0.9459038972854614,
              bottom: 0.7848567962646484,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04598693549633026,
              top: 0.3993118703365326,
              right: 0.9336104393005371,
              bottom: 0.7600537538528442,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03811585530638695,
              top: 0.39981552958488464,
              right: 0.930379331111908,
              bottom: 0.7376608848571777,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03887248411774635,
              top: 0.39445650577545166,
              right: 0.9219926595687866,
              bottom: 0.7150936126708984,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03595399484038353,
              top: 0.38512730598449707,
              right: 0.9219866991043091,
              bottom: 0.7139208316802979,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03982725739479065,
              top: 0.3853182792663574,
              right: 0.9119424819946289,
              bottom: 0.705276608467102,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034720528870821,
              top: 0.3808206617832184,
              right: 0.9164447784423828,
              bottom: 0.7255292534828186,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03843088075518608,
              top: 0.38996759057044983,
              right: 0.9124053120613098,
              bottom: 0.7087388634681702,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.039445966482162476,
              top: 0.38824790716171265,
              right: 0.9083456993103027,
              bottom: 0.7052494883537292,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03812849149107933,
              top: 0.3874927759170532,
              right: 0.9102426767349243,
              bottom: 0.7032070755958557,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03963465243577957,
              top: 0.3846653997898102,
              right: 0.910297155380249,
              bottom: 0.7110003232955933,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03537612780928612,
              top: 0.38340434432029724,
              right: 0.9154595136642456,
              bottom: 0.7380892634391785,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03956420719623566,
              top: 0.3947601616382599,
              right: 0.91304612159729,
              bottom: 0.7219933271408081,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.047199755907058716,
              top: 0.3923070728778839,
              right: 0.9171949625015259,
              bottom: 0.7252230048179626,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04699074104428291,
              top: 0.3938959836959839,
              right: 0.9114348888397217,
              bottom: 0.7171220779418945,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.045008476823568344,
              top: 0.3921395242214203,
              right: 0.9082394242286682,
              bottom: 0.7133910655975342,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.038669154047966,
              top: 0.3855132460594177,
              right: 0.9096887111663818,
              bottom: 0.7274054288864136,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03448858857154846,
              top: 0.38631096482276917,
              right: 0.9153861999511719,
              bottom: 0.7439149022102356,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03522582724690437,
              top: 0.38794055581092834,
              right: 0.9161792397499084,
              bottom: 0.7676621675491333,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03371601924300194,
              top: 0.3971729874610901,
              right: 0.9212544560432434,
              bottom: 0.7603048086166382,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.045449864119291306,
              top: 0.40118128061294556,
              right: 0.9205505847930908,
              bottom: 0.7384191751480103,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05162721872329712,
              top: 0.3993367850780487,
              right: 0.9201460480690002,
              bottom: 0.7214071750640869,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0504002571105957,
              top: 0.3929363489151001,
              right: 0.9235814809799194,
              bottom: 0.7143976092338562,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0474800206720829,
              top: 0.3890668749809265,
              right: 0.9114276766777039,
              bottom: 0.709679901599884,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.051631782203912735,
              top: 0.3898646831512451,
              right: 0.8996883630752563,
              bottom: 0.700296938419342,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04867719113826752,
              top: 0.387839138507843,
              right: 0.8836832046508789,
              bottom: 0.6962695717811584,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04529692977666855,
              top: 0.3866886794567108,
              right: 0.8616718649864197,
              bottom: 0.6959737539291382,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04110271483659744,
              top: 0.38948220014572144,
              right: 0.8448126316070557,
              bottom: 0.6889662742614746,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03207574784755707,
              top: 0.3869990408420563,
              right: 0.8357856869697571,
              bottom: 0.6864830851554871,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.090245820581913,
              top: 0.3277781903743744,
              right: 0.8939498662948608,
              bottom: 0.6272575855255127,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07847972959280014,
              top: 0.2889289855957031,
              right: 0.8473858833312988,
              bottom: 0.5755182504653931,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07590089738368988,
              top: 0.3263266086578369,
              right: 0.8419266939163208,
              bottom: 0.6118488311767578,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07342300564050674,
              top: 0.3214740455150604,
              right: 0.8394488096237183,
              bottom: 0.6069962978363037,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07094511389732361,
              top: 0.3166215121746063,
              right: 0.8369709253311157,
              bottom: 0.6021437644958496,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06846722960472107,
              top: 0.3117689788341522,
              right: 0.8344930410385132,
              bottom: 0.5972912311553955,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030070772394537926,
              top: 0.30092623829841614,
              right: 0.39293497800827026,
              bottom: 0.5271992683410645,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004964135587215424,
              top: 0.24510551989078522,
              right: 0.5274197459220886,
              bottom: 0.5636122822761536,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.04023578763008118,
              top: 0.24390821158885956,
              right: 0.6634544134140015,
              bottom: 0.5318538546562195,
            },
          },
        ],
      },
      {
        name: 't-shirt',
        confidence: 0.6543899178504944,
        frames: [
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6413611173629761,
              top: 0.35090816020965576,
              right: 0.9993539452552795,
              bottom: 1,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5906857252120972,
              top: 0.38197043538093567,
              right: 0.9963135719299316,
              bottom: 0.9954919815063477,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5064186453819275,
              top: 0.3224974572658539,
              right: 0.993878960609436,
              bottom: 0.9899110794067383,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4699017107486725,
              top: 0.32265254855155945,
              right: 0.9926987886428833,
              bottom: 0.9861975908279419,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4342305362224579,
              top: 0.30839425325393677,
              right: 0.9912172555923462,
              bottom: 0.9947226047515869,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5034085512161255,
              top: 0.42151230573654175,
              right: 0.9689375162124634,
              bottom: 0.9506644010543823,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4971228241920471,
              top: 0.4452783167362213,
              right: 0.9865046739578247,
              bottom: 0.9728178977966309,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.43211567401885986,
              top: 0.420945942401886,
              right: 1.0084037780761719,
              bottom: 0.9825171232223511,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.42379680275917053,
              top: 0.42782047390937805,
              right: 0.9501981735229492,
              bottom: 0.9748369455337524,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.33541733026504517,
              top: 0.3522733151912689,
              right: 0.8757961392402649,
              bottom: 1.0072346925735474,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23721252381801605,
              top: 0.3388293981552124,
              right: 0.7938864231109619,
              bottom: 0.9891377091407776,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08854425698518753,
              top: 0.33491069078445435,
              right: 0.672684371471405,
              bottom: 0.9811743497848511,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.013679493218660355,
              top: 0.3041716516017914,
              right: 0.5446922779083252,
              bottom: 0.9858901500701904,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.08119663596153259,
              top: 0.2939419150352478,
              right: 0.44981613755226135,
              bottom: 0.9756604433059692,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.035543352365493774,
              top: 0.27610722184181213,
              right: 0.3642941415309906,
              bottom: 0.9943355321884155,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.10514729470014572,
              top: 0.26946887373924255,
              right: 0.29469019174575806,
              bottom: 0.9876971244812012,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.02870168164372444,
              top: 0.41094520688056946,
              right: 0.2177131623029709,
              bottom: 0.8394073247909546,
            },
          },
        ],
      },
      {
        name: 'billiard table',
        confidence: 0.7043294310569763,
        frames: [
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.020531147718429565,
              top: 0.39706164598464966,
              right: 0.7929584980010986,
              bottom: 0.7089678645133972,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.020531147718429565,
              top: 0.39706164598464966,
              right: 0.7929584980010986,
              bottom: 0.7089678645133972,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.020531147718429565,
              top: 0.39706164598464966,
              right: 0.7929584980010986,
              bottom: 0.7089678645133972,
            },
          },
          {
            timeOffset: {
              low: 1,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1327836513519287,
              top: 0.2803020477294922,
              right: 0.9906076192855835,
              bottom: 0.9946224093437195,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1736757904291153,
              top: 0.25443899631500244,
              right: 0.9890405535697937,
              bottom: 0.9956088066101074,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1930212676525116,
              top: 0.24307160079479218,
              right: 1.0083860158920288,
              bottom: 0.9842414259910583,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2123667448759079,
              top: 0.2317042052745819,
              right: 1.0277315378189087,
              bottom: 0.9728740453720093,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2317122220993042,
              top: 0.22033680975437164,
              right: 1.047076940536499,
              bottom: 0.9615066051483154,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09065388143062592,
              top: 0.3519256114959717,
              right: 0.9281242489814758,
              bottom: 0.8130106925964355,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04143988713622093,
              top: 0.38345420360565186,
              right: 0.9007394909858704,
              bottom: 0.7513929605484009,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.6210799217224121,
        frames: [
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8447924256324768,
              top: 0.4630342721939087,
              right: 0.9987925291061401,
              bottom: 0.6412893533706665,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.844444990158081,
              top: 0.46302086114883423,
              right: 0.9981491565704346,
              bottom: 0.6411460638046265,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8444437384605408,
              top: 0.4630207121372223,
              right: 0.9981474876403809,
              bottom: 0.6411457061767578,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8413862586021423,
              top: 0.46209049224853516,
              right: 0.9992842674255371,
              bottom: 0.6440562605857849,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.9733045697212219,
        frames: [
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005176320672035217,
              top: 0.2872479557991028,
              right: 0.45527613162994385,
              bottom: 0.9919204115867615,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012346092611551285,
              top: 0.2950558364391327,
              right: 0.3750759959220886,
              bottom: 0.9889764785766602,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00030241499189287424,
              top: 0.29680734872817993,
              right: 0.35900089144706726,
              bottom: 0.9905715584754944,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0011612619273364544,
              top: 0.30101650953292847,
              right: 0.33429867029190063,
              bottom: 0.9947677254676819,
            },
          },
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0025453749112784863,
              top: 0.29679998755455017,
              right: 0.3182419538497925,
              bottom: 0.99055016040802,
            },
          },
        ],
      },
      {
        name: 'shorts',
        confidence: 0.5867493152618408,
        frames: [
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.034547239542007446,
              top: 0.8063285946846008,
              right: 0.30935725569725037,
              bottom: 0.9835136532783508,
            },
          },
          {
            timeOffset: {
              low: 2,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0029623163864016533,
              top: 0.7826420664787292,
              right: 0.231360524892807,
              bottom: 0.9701024293899536,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.9335265755653381,
        frames: [
          {
            timeOffset: {
              low: 3,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              right: 0.05092592537403107,
              bottom: 0.2734375,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.9605968594551086,
        frames: [
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.000386142753995955,
              top: 0.3895556628704071,
              right: 0.11877886950969696,
              bottom: 0.5441477298736572,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001239093253389001,
              top: 0.3633497357368469,
              right: 0.11101479083299637,
              bottom: 0.6076337099075317,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0026476839557290077,
              top: 0.32624709606170654,
              right: 0.13245326280593872,
              bottom: 0.6317633390426636,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004804063122719526,
              top: 0.3087815046310425,
              right: 0.14342892169952393,
              bottom: 0.6354422569274902,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004645881708711386,
              top: 0.3074474036693573,
              right: 0.15513557195663452,
              bottom: 0.5819970369338989,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.008233783766627312,
              top: 0.29423126578330994,
              right: 0.1591254472732544,
              bottom: 0.5639166831970215,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.013499235734343529,
              top: 0.2861538231372833,
              right: 0.16442228853702545,
              bottom: 0.5554593205451965,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02248217910528183,
              top: 0.2824731767177582,
              right: 0.17340785264968872,
              bottom: 0.5517469048500061,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.025819377973675728,
              top: 0.29099008440971375,
              right: 0.2127833515405655,
              bottom: 0.5304708480834961,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.042781610041856766,
              top: 0.2899681627750397,
              right: 0.23236702382564545,
              bottom: 0.5266697406768799,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06167462468147278,
              top: 0.28784674406051636,
              right: 0.25147026777267456,
              bottom: 0.524325430393219,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0893997848033905,
              top: 0.293245404958725,
              right: 0.27072998881340027,
              bottom: 0.5192077159881592,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12108368426561356,
              top: 0.29239484667778015,
              right: 0.27860987186431885,
              bottom: 0.5023018717765808,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1322459876537323,
              top: 0.28829425573349,
              right: 0.2871127128601074,
              bottom: 0.496756374835968,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1375819891691208,
              top: 0.2860090434551239,
              right: 0.2922314703464508,
              bottom: 0.49435317516326904,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14141860604286194,
              top: 0.2853752672672272,
              right: 0.29604989290237427,
              bottom: 0.4937095046043396,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14622634649276733,
              top: 0.29008519649505615,
              right: 0.3025388717651367,
              bottom: 0.49019041657447815,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1490684449672699,
              top: 0.2908824384212494,
              right: 0.30468663573265076,
              bottom: 0.48993566632270813,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1510140597820282,
              top: 0.29012855887413025,
              right: 0.30657488107681274,
              bottom: 0.4890948534011841,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15333323180675507,
              top: 0.2883295714855194,
              right: 0.308889240026474,
              bottom: 0.48728859424591064,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15512041747570038,
              top: 0.29111289978027344,
              right: 0.339397668838501,
              bottom: 0.48072025179862976,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16446873545646667,
              top: 0.2903977632522583,
              right: 0.3504285216331482,
              bottom: 0.4790273606777191,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1701810359954834,
              top: 0.28965216875076294,
              right: 0.3562794625759125,
              bottom: 0.4782012104988098,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17376619577407837,
              top: 0.2891080379486084,
              right: 0.35987624526023865,
              bottom: 0.47765031456947327,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17422598600387573,
              top: 0.29148197174072266,
              right: 0.3711393475532532,
              bottom: 0.480304479598999,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17695188522338867,
              top: 0.29320257902145386,
              right: 0.37414780259132385,
              bottom: 0.4817681610584259,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17759576439857483,
              top: 0.29418742656707764,
              right: 0.37481576204299927,
              bottom: 0.4827311038970947,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17661795020103455,
              top: 0.294933021068573,
              right: 0.37383997440338135,
              bottom: 0.48347485065460205,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1689552217721939,
              top: 0.2942488491535187,
              right: 0.38430947065353394,
              bottom: 0.4917449355125427,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16828741133213043,
              top: 0.2964714467525482,
              right: 0.38484108448028564,
              bottom: 0.49435192346572876,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16537311673164368,
              top: 0.2979687452316284,
              right: 0.38203030824661255,
              bottom: 0.49588239192962646,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15979185700416565,
              top: 0.2993778884410858,
              right: 0.37645775079727173,
              bottom: 0.4972943067550659,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12651142477989197,
              top: 0.2945523262023926,
              right: 0.38993772864341736,
              bottom: 0.5040680170059204,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11651971936225891,
              top: 0.29524004459381104,
              right: 0.3837433457374573,
              bottom: 0.5055769085884094,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10631317645311356,
              top: 0.2966892421245575,
              right: 0.3738747239112854,
              bottom: 0.5070992112159729,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09531812369823456,
              top: 0.2990887463092804,
              right: 0.36290812492370605,
              bottom: 0.5095048546791077,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05799723044037819,
              top: 0.2916161119937897,
              right: 0.3538449704647064,
              bottom: 0.5224838852882385,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04252373054623604,
              top: 0.2926916480064392,
              right: 0.34047314524650574,
              bottom: 0.5248602628707886,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03465207293629646,
              top: 0.2941667437553406,
              right: 0.3327835500240326,
              bottom: 0.5264480710029602,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.032459624111652374,
              top: 0.2953348457813263,
              right: 0.3306063711643219,
              bottom: 0.5276256799697876,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02776007354259491,
              top: 0.2988521158695221,
              right: 0.3478638529777527,
              bottom: 0.532001256942749,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0328962467610836,
              top: 0.3017861247062683,
              right: 0.3540903627872467,
              bottom: 0.5346274375915527,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0388663224875927,
              top: 0.3034420609474182,
              right: 0.36015403270721436,
              bottom: 0.5362569689750671,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.043662767857313156,
              top: 0.3037240505218506,
              right: 0.36495834589004517,
              bottom: 0.5365367531776428,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04707824066281319,
              top: 0.30782219767570496,
              right: 0.41975992918014526,
              bottom: 0.5326656103134155,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06336843222379684,
              top: 0.308514267206192,
              right: 0.43985533714294434,
              bottom: 0.532550036907196,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07434580475091934,
              top: 0.3087678849697113,
              right: 0.4511669874191284,
              bottom: 0.5327327251434326,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07906385511159897,
              top: 0.30876824259757996,
              right: 0.45591315627098083,
              bottom: 0.5327271223068237,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.047713082283735275,
              top: 0.30588388442993164,
              right: 0.47621065378189087,
              bottom: 0.5637262463569641,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04077501595020294,
              top: 0.3128189146518707,
              right: 0.4728420376777649,
              bottom: 0.5734869241714478,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0341598317027092,
              top: 0.31745123863220215,
              right: 0.466538667678833,
              bottom: 0.5783661603927612,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027179554104804993,
              top: 0.3192174732685089,
              right: 0.4595845937728882,
              bottom: 0.5801531076431274,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04655711352825165,
              top: 0.3135394752025604,
              right: 0.38514578342437744,
              bottom: 0.5714008808135986,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03011172078549862,
              top: 0.3069107234477997,
              right: 0.3604246973991394,
              bottom: 0.5642458200454712,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.017411768436431885,
              top: 0.30388572812080383,
              right: 0.3470984399318695,
              bottom: 0.5611810684204102,
            },
          },
          {
            timeOffset: {
              low: 9,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006922087632119656,
              top: 0.30312812328338623,
              right: 0.33655649423599243,
              bottom: 0.5604200959205627,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004687460605055094,
              top: 0.2968303859233856,
              right: 0.29615652561187744,
              bottom: 0.5734779834747314,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.003219948150217533,
              top: 0.29859766364097595,
              right: 0.2807666063308716,
              bottom: 0.5766040086746216,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0065060630440711975,
              top: 0.2998063862323761,
              right: 0.27263763546943665,
              bottom: 0.5779215097427368,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.007006468717008829,
              top: 0.30097827315330505,
              right: 0.269187867641449,
              bottom: 0.5791023969650269,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0031740879639983177,
              top: 0.3070448338985443,
              right: 0.22997668385505676,
              bottom: 0.5761532187461853,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0019358833087608218,
              top: 0.30818966031074524,
              right: 0.218968003988266,
              bottom: 0.5764917135238647,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004757142625749111,
              top: 0.3084692358970642,
              right: 0.2148096114397049,
              bottom: 0.5767045021057129,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.005293022841215134,
              top: 0.3081580698490143,
              right: 0.21416166424751282,
              bottom: 0.5763877630233765,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0004505514807533473,
              top: 0.316244900226593,
              right: 0.20625649392604828,
              bottom: 0.5776166319847107,
            },
          },
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0012423002626746893,
              top: 0.31958508491516113,
              right: 0.2051207721233368,
              bottom: 0.5800811052322388,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0022428163792937994,
              top: 0.32105177640914917,
              right: 0.2059611678123474,
              bottom: 0.5814750790596008,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0031571814324706793,
              top: 0.32182908058166504,
              right: 0.20686210691928864,
              bottom: 0.5822463035583496,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00029517311486415565,
              top: 0.3244970738887787,
              right: 0.21446529030799866,
              bottom: 0.5868476629257202,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0010039977496489882,
              top: 0.32637670636177063,
              right: 0.21666234731674194,
              bottom: 0.5888641476631165,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0024556037969887257,
              top: 0.3271816372871399,
              right: 0.21818943321704865,
              bottom: 0.589680552482605,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0037024698685854673,
              top: 0.32758933305740356,
              right: 0.21944263577461243,
              bottom: 0.5900892019271851,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0001837042364059016,
              top: 0.31974533200263977,
              right: 0.227176234126091,
              bottom: 0.5838885307312012,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001162051223218441,
              top: 0.31546536087989807,
              right: 0.2288738638162613,
              bottom: 0.579534649848938,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0027074788231402636,
              top: 0.31367117166519165,
              right: 0.23047973215579987,
              bottom: 0.5777342319488525,
            },
          },
          {
            timeOffset: {
              low: 11,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.003939887508749962,
              top: 0.314196914434433,
              right: 0.23171719908714294,
              bottom: 0.5782594680786133,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00392420357093215,
              top: 0.30499503016471863,
              right: 0.25545674562454224,
              bottom: 0.5882387161254883,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0008948581526055932,
              top: 0.30418670177459717,
              right: 0.26270434260368347,
              bottom: 0.5889409780502319,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006052850279957056,
              top: 0.3039543032646179,
              right: 0.268070787191391,
              bottom: 0.5888382196426392,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011061284691095352,
              top: 0.3039211332798004,
              right: 0.2730967104434967,
              bottom: 0.5888159871101379,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004727918654680252,
              top: 0.31819766759872437,
              right: 0.3188081979751587,
              bottom: 0.5901026725769043,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001916270237416029,
              top: 0.32380032539367676,
              right: 0.33016493916511536,
              bottom: 0.5942530632019043,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0065647331066429615,
              top: 0.3273017406463623,
              right: 0.3352302014827728,
              bottom: 0.5976260304450989,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007418847642838955,
              top: 0.32940658926963806,
              right: 0.33611932396888733,
              bottom: 0.5997200608253479,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.005802121479064226,
              top: 0.35384735465049744,
              right: 0.38250160217285156,
              bottom: 0.5913841724395752,
            },
          },
          {
            timeOffset: {
              low: 12,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0007502806256525218,
              top: 0.3600253164768219,
              right: 0.3938102424144745,
              bottom: 0.5946783423423767,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004972023423761129,
              top: 0.3626706004142761,
              right: 0.3976038694381714,
              bottom: 0.5970689654350281,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005643235519528389,
              top: 0.3635815382003784,
              right: 0.3982391059398651,
              bottom: 0.597958505153656,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007596961222589016,
              top: 0.37873852252960205,
              right: 0.39687272906303406,
              bottom: 0.5883209705352783,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006837404798716307,
              top: 0.3809165358543396,
              right: 0.39575862884521484,
              bottom: 0.5883997678756714,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005766228307038546,
              top: 0.38123345375061035,
              right: 0.39465785026550293,
              bottom: 0.5885411500930786,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004840674810111523,
              top: 0.3813011348247528,
              right: 0.3937298059463501,
              bottom: 0.5885941386222839,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0010599722154438496,
              top: 0.3882552683353424,
              right: 0.3953779935836792,
              bottom: 0.5841237306594849,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00025059754261747,
              top: 0.3893603980541229,
              right: 0.39468440413475037,
              bottom: 0.5842427611351013,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00014888001896906644,
              top: 0.3896046280860901,
              right: 0.3942946493625641,
              bottom: 0.5844038724899292,
            },
          },
          {
            timeOffset: {
              low: 13,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0001251347566721961,
              top: 0.3892972767353058,
              right: 0.3934709429740906,
              bottom: 0.5840895771980286,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0029996992088854313,
              top: 0.38594016432762146,
              right: 0.3802805244922638,
              bottom: 0.5846017599105835,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0007228049216791987,
              top: 0.3848240077495575,
              right: 0.3759113848209381,
              bottom: 0.5837578177452087,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0008180307340808213,
              top: 0.38429418206214905,
              right: 0.37419775128364563,
              bottom: 0.5832504630088806,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0008600226719863713,
              top: 0.3840782046318054,
              right: 0.37414127588272095,
              bottom: 0.5830363631248474,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.002327350899577141,
              top: 0.38840147852897644,
              right: 0.37924396991729736,
              bottom: 0.5838261246681213,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0011233704863116145,
              top: 0.3903351128101349,
              right: 0.38036566972732544,
              bottom: 0.5851801633834839,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00034588511334732175,
              top: 0.39127790927886963,
              right: 0.3811362087726593,
              bottom: 0.5860740542411804,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00007859578909119591,
              top: 0.39166635274887085,
              right: 0.3815601170063019,
              bottom: 0.5864583849906921,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005890471860766411,
              top: 0.3917405307292938,
              right: 0.372589111328125,
              bottom: 0.582073986530304,
            },
          },
          {
            timeOffset: {
              low: 14,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006726956460624933,
              top: 0.39127081632614136,
              right: 0.370765745639801,
              bottom: 0.581769585609436,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005474775563925505,
              top: 0.38904869556427,
              right: 0.3642576336860657,
              bottom: 0.5897704362869263,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0038378206081688404,
              top: 0.38972634077072144,
              right: 0.36209994554519653,
              bottom: 0.589122474193573,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004398748744279146,
              top: 0.40092042088508606,
              right: 0.38070639967918396,
              bottom: 0.5633922219276428,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0020895423367619514,
              top: 0.3980984389781952,
              right: 0.38478192687034607,
              bottom: 0.5572627186775208,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0003296619397588074,
              top: 0.39570730924606323,
              right: 0.3873528242111206,
              bottom: 0.5545874834060669,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0010952381417155266,
              top: 0.3949865400791168,
              right: 0.38813111186027527,
              bottom: 0.5538429021835327,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.002268283162266016,
              top: 0.38799789547920227,
              right: 0.3981313109397888,
              bottom: 0.5741328597068787,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00539845647290349,
              top: 0.3915015161037445,
              right: 0.40165814757347107,
              bottom: 0.5798399448394775,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006939224898815155,
              top: 0.39414677023887634,
              right: 0.4032324552536011,
              bottom: 0.5826714038848877,
            },
          },
          {
            timeOffset: {
              low: 15,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007344888988882303,
              top: 0.39540889859199524,
              right: 0.4036409258842468,
              bottom: 0.5839491486549377,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.008857217617332935,
              top: 0.39075982570648193,
              right: 0.38560864329338074,
              bottom: 0.5902090072631836,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004376744385808706,
              top: 0.3903713524341583,
              right: 0.3786715567111969,
              bottom: 0.5903259515762329,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0014558574184775352,
              top: 0.3900405168533325,
              right: 0.375548392534256,
              bottom: 0.5900367498397827,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0001941893860930577,
              top: 0.389701247215271,
              right: 0.3742698132991791,
              bottom: 0.5897009372711182,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0013799249427393079,
              top: 0.39649200439453125,
              right: 0.37316614389419556,
              bottom: 0.5804766416549683,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0015567912487313151,
              top: 0.3965529203414917,
              right: 0.3728940784931183,
              bottom: 0.5789862871170044,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001807049266062677,
              top: 0.39624011516571045,
              right: 0.37310677766799927,
              bottom: 0.5785436630249023,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.002626576693728566,
              top: 0.3958120346069336,
              right: 0.3739231526851654,
              bottom: 0.5781047344207764,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.013277110643684864,
              top: 0.3967888057231903,
              right: 0.3552127182483673,
              bottom: 0.5757129192352295,
            },
          },
          {
            timeOffset: {
              low: 16,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011857663281261921,
              top: 0.3967462182044983,
              right: 0.35099491477012634,
              bottom: 0.5749363899230957,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010594699531793594,
              top: 0.3969109058380127,
              right: 0.34950438141822815,
              bottom: 0.5750413537025452,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010094283148646355,
              top: 0.39706945419311523,
              right: 0.34898489713668823,
              bottom: 0.5751948952674866,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.002457852941006422,
              top: 0.3923809230327606,
              right: 0.36865323781967163,
              bottom: 0.580479621887207,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0013481260975822806,
              top: 0.3922213613986969,
              right: 0.3716244697570801,
              bottom: 0.580724835395813,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00012170415720902383,
              top: 0.3922203779220581,
              right: 0.3730117082595825,
              bottom: 0.580758810043335,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001001319964416325,
              top: 0.3922193944454193,
              right: 0.37414824962615967,
              bottom: 0.5807607769966125,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0062499865889549255,
              top: 0.3940486013889313,
              right: 0.3698456585407257,
              bottom: 0.5749285221099854,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004248118028044701,
              top: 0.3895569443702698,
              right: 0.37087199091911316,
              bottom: 0.5816323161125183,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004529204219579697,
              top: 0.39050477743148804,
              right: 0.369864284992218,
              bottom: 0.5779545307159424,
            },
          },
          {
            timeOffset: {
              low: 17,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004995278548449278,
              top: 0.3893886208534241,
              right: 0.3689098656177521,
              bottom: 0.566360354423523,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0028801853768527508,
              top: 0.38087552785873413,
              right: 0.3866647779941559,
              bottom: 0.5756879448890686,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00004435899973032065,
              top: 0.3808046579360962,
              right: 0.391529381275177,
              bottom: 0.5770268440246582,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0032104135025292635,
              top: 0.3809702694416046,
              right: 0.3948618471622467,
              bottom: 0.5773133635520935,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006811431143432856,
              top: 0.3804001212120056,
              right: 0.39847683906555176,
              bottom: 0.5767533779144287,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009047188796103,
              top: 0.34984734654426575,
              right: 0.39379435777664185,
              bottom: 0.5970430374145508,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009038485586643219,
              top: 0.34379810094833374,
              right: 0.3924896717071533,
              bottom: 0.5949965715408325,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009983460418879986,
              top: 0.3406606614589691,
              right: 0.39332664012908936,
              bottom: 0.5921926498413086,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01297821570187807,
              top: 0.33873361349105835,
              right: 0.3963123857975006,
              bottom: 0.5902935266494751,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.021734146401286125,
              top: 0.3196362853050232,
              right: 0.33888816833496094,
              bottom: 0.5676261186599731,
            },
          },
          {
            timeOffset: {
              low: 18,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.008044636808335781,
              top: 0.3066369891166687,
              right: 0.3187744915485382,
              bottom: 0.5540792346000671,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00024406980082858354,
              top: 0.3009609878063202,
              right: 0.31047478318214417,
              bottom: 0.5483607053756714,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0038143503479659557,
              top: 0.29917627573013306,
              right: 0.3063746690750122,
              bottom: 0.5465724468231201,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00042131473310291767,
              top: 0.29252907633781433,
              right: 0.28921574354171753,
              bottom: 0.5379519462585449,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.002668510191142559,
              top: 0.28935080766677856,
              right: 0.28373149037361145,
              bottom: 0.5341941714286804,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.003089317586272955,
              top: 0.2883041799068451,
              right: 0.279651939868927,
              bottom: 0.5331001877784729,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0023235403932631016,
              top: 0.28883814811706543,
              right: 0.27502015233039856,
              bottom: 0.5336301922798157,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.010789693333208561,
              top: 0.28562217950820923,
              right: 0.3093448281288147,
              bottom: 0.5435630083084106,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004413282498717308,
              top: 0.2870718240737915,
              right: 0.3167814612388611,
              bottom: 0.545846164226532,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.000012299468835408334,
              top: 0.2879052460193634,
              right: 0.3212754726409912,
              bottom: 0.5467526912689209,
            },
          },
          {
            timeOffset: {
              low: 19,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.002387579996138811,
              top: 0.28861168026924133,
              right: 0.321986585855484,
              bottom: 0.5474653244018555,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004518079571425915,
              top: 0.28846967220306396,
              right: 0.3144718110561371,
              bottom: 0.5533885955810547,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0028478263411670923,
              top: 0.2912253439426422,
              right: 0.31046661734580994,
              bottom: 0.5563141107559204,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0014142021536827087,
              top: 0.2938360571861267,
              right: 0.3071424067020416,
              bottom: 0.5589389801025391,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0002853664045687765,
              top: 0.2956702411174774,
              right: 0.3050069212913513,
              bottom: 0.5607743263244629,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012807137332856655,
              top: 0.29063811898231506,
              right: 0.2594437599182129,
              bottom: 0.5676324367523193,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004311201628297567,
              top: 0.29089057445526123,
              right: 0.2455419898033142,
              bottom: 0.568444013595581,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0007865719380788505,
              top: 0.29155439138412476,
              right: 0.23999525606632233,
              bottom: 0.5691542625427246,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0026118040550500154,
              top: 0.2923562824726105,
              right: 0.23813238739967346,
              bottom: 0.5699601173400879,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0017205523326992989,
              top: 0.3012021780014038,
              right: 0.21603234112262726,
              bottom: 0.5671758651733398,
            },
          },
          {
            timeOffset: {
              low: 20,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0010338375577703118,
              top: 0.3038858473300934,
              right: 0.21034185588359833,
              bottom: 0.5685840845108032,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0013796128332614899,
              top: 0.3051752746105194,
              right: 0.20975366234779358,
              bottom: 0.5697681903839111,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0002972265938296914,
              top: 0.3059193193912506,
              right: 0.21141020953655243,
              bottom: 0.5705034732818604,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0029537947848439217,
              top: 0.30222591757774353,
              right: 0.21999262273311615,
              bottom: 0.5573768019676208,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0009682290256023407,
              top: 0.2973969578742981,
              right: 0.2204647809267044,
              bottom: 0.5516451597213745,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0003155666636303067,
              top: 0.29641619324684143,
              right: 0.21907830238342285,
              bottom: 0.5505896806716919,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.000987832434475422,
              top: 0.2981063425540924,
              right: 0.21613365411758423,
              bottom: 0.5522735714912415,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007140676490962505,
              top: 0.31170621514320374,
              right: 0.18814869225025177,
              bottom: 0.5663312673568726,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0026844751555472612,
              top: 0.32239019870758057,
              right: 0.17649205029010773,
              bottom: 0.5765953063964844,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.000609647249802947,
              top: 0.3275550603866577,
              right: 0.16920043528079987,
              bottom: 0.5817249417304993,
            },
          },
          {
            timeOffset: {
              low: 21,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0025677112862467766,
              top: 0.3306995928287506,
              right: 0.16605910658836365,
              bottom: 0.5848665237426758,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.7952043414115906,
        frames: [
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.003703703638166189,
              top: 0.38489583134651184,
              right: 0.12129630148410797,
              bottom: 0.5390625,
            },
          },
          {
            timeOffset: {
              low: 4,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007401718758046627,
              top: 0.3817756175994873,
              right: 0.12499431520700455,
              bottom: 0.5359423160552979,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5137929916381836,
        frames: [
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0027273744344711304,
              top: 0.4448741674423218,
              right: 0.09512918442487717,
              bottom: 0.5987375974655151,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0007075092871673405,
              top: 0.44683244824409485,
              right: 0.08505363017320633,
              bottom: 0.5930745005607605,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0009082544129341841,
              top: 0.4468737542629242,
              right: 0.08517467975616455,
              bottom: 0.5932186841964722,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0009480577427893877,
              top: 0.44688913226127625,
              right: 0.08520791679620743,
              bottom: 0.5932425260543823,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001069151214323938,
              top: 0.4479740560054779,
              right: 0.08254227042198181,
              bottom: 0.5908796191215515,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0005827864515595138,
              top: 0.44761335849761963,
              right: 0.0825103148818016,
              bottom: 0.5900484323501587,
            },
          },
        ],
      },
      {
        name: 'clothing',
        confidence: 0.5426101088523865,
        frames: [
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10320501774549484,
              top: 0.31121957302093506,
              right: 0.26090314984321594,
              bottom: 0.4890083074569702,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11843310296535492,
              top: 0.3176227807998657,
              right: 0.2765561640262604,
              bottom: 0.48868465423583984,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11902927607297897,
              top: 0.31774017214775085,
              right: 0.27715232968330383,
              bottom: 0.4888020157814026,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11962544173002243,
              top: 0.3178575336933136,
              right: 0.2777484953403473,
              bottom: 0.48891937732696533,
            },
          },
          {
            timeOffset: {
              low: 5,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12022161483764648,
              top: 0.31797489523887634,
              right: 0.27834469079971313,
              bottom: 0.4890367388725281,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12081778794527054,
              top: 0.3180922567844391,
              right: 0.2789408564567566,
              bottom: 0.4891541004180908,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.121413953602314,
              top: 0.31820961833000183,
              right: 0.27953702211380005,
              bottom: 0.48927146196365356,
            },
          },
          {
            timeOffset: {
              low: 6,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14803849160671234,
              top: 0.3064248561859131,
              right: 0.3143598437309265,
              bottom: 0.47528111934661865,
            },
          },
        ],
      },
      {
        name: 'clothing',
        confidence: 0.5406638383865356,
        frames: [
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12219950556755066,
              top: 0.3307788670063019,
              right: 0.3156052529811859,
              bottom: 0.46019425988197327,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10743013024330139,
              top: 0.33280935883522034,
              right: 0.30094847083091736,
              bottom: 0.46197640895843506,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09224462509155273,
              top: 0.33532029390335083,
              right: 0.285763144493103,
              bottom: 0.4644869863986969,
            },
          },
          {
            timeOffset: {
              low: 7,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07427740097045898,
              top: 0.33553698658943176,
              right: 0.27627959847450256,
              bottom: 0.4704301357269287,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06207272782921791,
              top: 0.33769339323043823,
              right: 0.2647900879383087,
              bottom: 0.47306928038597107,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037445247173309326,
              top: 0.3414366543292999,
              right: 0.2747373580932617,
              bottom: 0.4594932794570923,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030365247279405594,
              top: 0.34011146426200867,
              right: 0.27058684825897217,
              bottom: 0.4596202075481415,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5036543011665344,
        frames: [
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8435440063476562,
              top: 0.4662708044052124,
              right: 0.9991261959075928,
              bottom: 0.6463446021080017,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5240868330001831,
        frames: [
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0015512332320213318,
              top: 0.4507332444190979,
              right: 0.08992931246757507,
              bottom: 0.5915026068687439,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0010533793829381466,
              top: 0.45220786333084106,
              right: 0.08714522421360016,
              bottom: 0.5919855833053589,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0010074255988001823,
              top: 0.4532395005226135,
              right: 0.08874931186437607,
              bottom: 0.5917271375656128,
            },
          },
          {
            timeOffset: {
              low: 8,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001899418537504971,
              top: 0.4529525339603424,
              right: 0.08826179802417755,
              bottom: 0.5926625728607178,
            },
          },
        ],
      },
      {
        name: 'table',
        confidence: 0.5231504440307617,
        frames: [
          {
            timeOffset: {
              low: 10,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22864273190498352,
              top: 0.328256219625473,
              right: 0.6859652996063232,
              bottom: 0.4357912838459015,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.9713866710662842,
        frames: [
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0009167119860649109,
              top: 0.39264506101608276,
              right: 0.21454158425331116,
              bottom: 0.8758441805839539,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00032129709143191576,
              top: 0.4025971293449402,
              right: 0.21877554059028625,
              bottom: 0.9031900763511658,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00006579696491826326,
              top: 0.39870741963386536,
              right: 0.2206423282623291,
              bottom: 0.9143431186676025,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0000797054308350198,
              top: 0.3805219531059265,
              right: 0.23731839656829834,
              bottom: 0.9112107157707214,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005271055735647678,
              top: 0.3775593936443329,
              right: 0.2440338432788849,
              bottom: 0.9092386960983276,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012727507390081882,
              top: 0.3786967992782593,
              right: 0.2516058087348938,
              bottom: 0.9104599356651306,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.014046953059732914,
              top: 0.3697749674320221,
              right: 0.26396268606185913,
              bottom: 0.9258803129196167,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006773825269192457,
              top: 0.31513625383377075,
              right: 0.27024850249290466,
              bottom: 0.9662389159202576,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006493643391877413,
              top: 0.3061719536781311,
              right: 0.2703462243080139,
              bottom: 0.9652963876724243,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007126125507056713,
              top: 0.2997835576534271,
              right: 0.27101197838783264,
              bottom: 0.9596145153045654,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010506199672818184,
              top: 0.2974807918071747,
              right: 0.27439484000205994,
              bottom: 0.9573712348937988,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.02150043658912182,
              top: 0.2824164628982544,
              right: 0.4009639620780945,
              bottom: 0.9579786658287048,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007970403879880905,
              top: 0.2756345272064209,
              right: 0.4429287314414978,
              bottom: 0.9521124958992004,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03993724659085274,
              top: 0.27075982093811035,
              right: 0.4759517014026642,
              bottom: 0.9473152160644531,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06644865870475769,
              top: 0.26755353808403015,
              right: 0.5025516748428345,
              bottom: 0.944115400314331,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04299486055970192,
              top: 0.2548212707042694,
              right: 0.4938124716281891,
              bottom: 0.9580309391021729,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030065134167671204,
              top: 0.25400489568710327,
              right: 0.4818292260169983,
              bottom: 0.9590436220169067,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.019088424742221832,
              top: 0.25365665555000305,
              right: 0.47093290090560913,
              bottom: 0.9588507413864136,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009233927354216576,
              top: 0.25318631529808044,
              right: 0.46108514070510864,
              bottom: 0.9583934545516968,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.015287593007087708,
              top: 0.26347556710243225,
              right: 0.4311456084251404,
              bottom: 0.965479850769043,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010011659003794193,
              top: 0.2694738507270813,
              right: 0.4223686456680298,
              bottom: 0.9710733890533447,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006682978011667728,
              top: 0.2726055383682251,
              right: 0.41874685883522034,
              bottom: 0.9741711616516113,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007901627570390701,
              top: 0.2738562524318695,
              right: 0.41994091868400574,
              bottom: 0.9754190444946289,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00028099099290557206,
              top: 0.2694545388221741,
              right: 0.466275155544281,
              bottom: 0.9824673533439636,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010845157317817211,
              top: 0.2694151699542999,
              right: 0.48084670305252075,
              bottom: 0.9829123020172119,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.018207913264632225,
              top: 0.269401878118515,
              right: 0.48854735493659973,
              bottom: 0.9829398393630981,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.022486533969640732,
              top: 0.2702922224998474,
              right: 0.4928543269634247,
              bottom: 0.9838336110115051,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.013998058624565601,
              top: 0.2824464440345764,
              right: 0.5172916054725647,
              bottom: 0.9762305617332458,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.017679965123534203,
              top: 0.28511369228363037,
              right: 0.5230476260185242,
              bottom: 0.9769562482833862,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.020862309262156487,
              top: 0.28541484475135803,
              right: 0.5264021158218384,
              bottom: 0.9770961999893188,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0228563379496336,
              top: 0.28357982635498047,
              right: 0.5284106135368347,
              bottom: 0.9752477407455444,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.003925529774278402,
              top: 0.28267595171928406,
              right: 0.6080892086029053,
              bottom: 0.9699218273162842,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.014159508980810642,
              top: 0.28089120984077454,
              right: 0.6263861656188965,
              bottom: 0.967415452003479,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012772484682500362,
              top: 0.2800935208797455,
              right: 0.6248254776000977,
              bottom: 0.9665573835372925,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012638449668884277,
              top: 0.2810019850730896,
              right: 0.6085593700408936,
              bottom: 0.9674608111381531,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05771632120013237,
              top: 0.3172789514064789,
              right: 0.4126562774181366,
              bottom: 0.9523248672485352,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.016384044662117958,
              top: 0.326653391122818,
              right: 0.35063135623931885,
              bottom: 0.9572566747665405,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.008055486716330051,
              top: 0.33094900846481323,
              right: 0.3211124539375305,
              bottom: 0.961190402507782,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.014033163897693157,
              top: 0.3487936854362488,
              right: 0.3036816120147705,
              bottom: 0.9513291716575623,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.025959711521863937,
              top: 0.4032033383846283,
              right: 0.34755340218544006,
              bottom: 0.9080480337142944,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.009314117021858692,
              top: 0.4101467430591583,
              right: 0.3681281507015228,
              bottom: 0.9066890478134155,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0031921204645186663,
              top: 0.41210490465164185,
              right: 0.38094186782836914,
              bottom: 0.9079974889755249,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.012763366103172302,
              top: 0.4134067893028259,
              right: 0.3905388116836548,
              bottom: 0.9092451333999634,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011022143065929413,
              top: 0.42766857147216797,
              right: 0.3784237802028656,
              bottom: 0.8991476893424988,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005792144685983658,
              top: 0.43026116490364075,
              right: 0.3708202540874481,
              bottom: 0.8992362022399902,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0021171150729060173,
              top: 0.43082037568092346,
              right: 0.3661014437675476,
              bottom: 0.8995891809463501,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00048467275337316096,
              top: 0.43080005049705505,
              right: 0.36510881781578064,
              bottom: 0.8995516300201416,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00030486960895359516,
              top: 0.45614510774612427,
              right: 0.36676502227783203,
              bottom: 0.9006770253181458,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.003260022960603237,
              top: 0.47082555294036865,
              right: 0.35893651843070984,
              bottom: 0.9113445281982422,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0019375545671209693,
              top: 0.4796507656574249,
              right: 0.3643588125705719,
              bottom: 0.9178750514984131,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0026477272622287273,
              top: 0.49185246229171753,
              right: 0.3722720146179199,
              bottom: 0.9084210395812988,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00861141737550497,
              top: 0.48807787895202637,
              right: 0.38028016686439514,
              bottom: 0.9016472101211548,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011167106218636036,
              top: 0.4852171838283539,
              right: 0.38249456882476807,
              bottom: 0.8982839584350586,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010498445481061935,
              top: 0.48314711451530457,
              right: 0.38179734349250793,
              bottom: 0.8961718082427979,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.007504659239202738,
              top: 0.4819231927394867,
              right: 0.378801167011261,
              bottom: 0.8949443101882935,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0068230112083256245,
              top: 0.48697227239608765,
              right: 0.3756062388420105,
              bottom: 0.8985843658447266,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0025364274624735117,
              top: 0.49163347482681274,
              right: 0.3830854594707489,
              bottom: 0.8918254375457764,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00491641741245985,
              top: 0.4894067645072937,
              right: 0.3835272490978241,
              bottom: 0.8990641832351685,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006376774050295353,
              top: 0.4881962835788727,
              right: 0.3850458264350891,
              bottom: 0.9063612818717957,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.013221630826592445,
              top: 0.48516082763671875,
              right: 0.38259634375572205,
              bottom: 0.9044830799102783,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01457313820719719,
              top: 0.4831259250640869,
              right: 0.3823152482509613,
              bottom: 0.9024010896682739,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.014719249680638313,
              top: 0.48178645968437195,
              right: 0.3823243975639343,
              bottom: 0.9010576605796814,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.015088163316249847,
              top: 0.48106518387794495,
              right: 0.38268181681632996,
              bottom: 0.9003360271453857,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.008193028159439564,
              top: 0.4768301546573639,
              right: 0.38524284958839417,
              bottom: 0.9018821716308594,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00690406234934926,
              top: 0.475835382938385,
              right: 0.3846205472946167,
              bottom: 0.90131676197052,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006356500089168549,
              top: 0.47551220655441284,
              right: 0.384129136800766,
              bottom: 0.9010297060012817,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00614653155207634,
              top: 0.4752016067504883,
              right: 0.38392388820648193,
              bottom: 0.9007221460342407,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011659939773380756,
              top: 0.47902557253837585,
              right: 0.3826504349708557,
              bottom: 0.8876678943634033,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0123768150806427,
              top: 0.47762736678123474,
              right: 0.38194915652275085,
              bottom: 0.8845530152320862,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010809955187141895,
              top: 0.47755175828933716,
              right: 0.38026511669158936,
              bottom: 0.8843355178833008,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009766700677573681,
              top: 0.4772481620311737,
              right: 0.37921202182769775,
              bottom: 0.8840200901031494,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00901324674487114,
              top: 0.48113515973091125,
              right: 0.38329753279685974,
              bottom: 0.8739827275276184,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010344668291509151,
              top: 0.4795420169830322,
              right: 0.38443616032600403,
              bottom: 0.8708288669586182,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011050829663872719,
              top: 0.4775959849357605,
              right: 0.38512635231018066,
              bottom: 0.8687536716461182,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011887759901583195,
              top: 0.47670164704322815,
              right: 0.38596194982528687,
              bottom: 0.8678484559059143,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011540757492184639,
              top: 0.47767356038093567,
              right: 0.38534170389175415,
              bottom: 0.8722228407859802,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011543997563421726,
              top: 0.4798922538757324,
              right: 0.3847470283508301,
              bottom: 0.8746635317802429,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01184279378503561,
              top: 0.48105981945991516,
              right: 0.3849955201148987,
              bottom: 0.8758497834205627,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011501955799758434,
              top: 0.4819171130657196,
              right: 0.38465049862861633,
              bottom: 0.8767086267471313,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011349538341164589,
              top: 0.4745429754257202,
              right: 0.3830498158931732,
              bottom: 0.8999328017234802,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011127418838441372,
              top: 0.47787681221961975,
              right: 0.382458359003067,
              bottom: 0.9057672023773193,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.010945015586912632,
              top: 0.4801240563392639,
              right: 0.3822442293167114,
              bottom: 0.9082293510437012,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01089261844754219,
              top: 0.48058030009269714,
              right: 0.38218915462493896,
              bottom: 0.9087036848068237,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0066193812526762486,
              top: 0.4660249948501587,
              right: 0.3755013942718506,
              bottom: 0.9236634373664856,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006638830062001944,
              top: 0.4683728516101837,
              right: 0.37010833621025085,
              bottom: 0.9042624235153198,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004017489962279797,
              top: 0.4617229998111725,
              right: 0.36702221632003784,
              bottom: 0.8957449197769165,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0005293171270750463,
              top: 0.44642916321754456,
              right: 0.3683755695819855,
              bottom: 0.9003396034240723,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.004605656955391169,
              top: 0.39795011281967163,
              right: 0.379928320646286,
              bottom: 0.9311540722846985,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.001955467276275158,
              top: 0.3893360197544098,
              right: 0.38063862919807434,
              bottom: 0.9288343191146851,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00018156343139708042,
              top: 0.38559451699256897,
              right: 0.3805452883243561,
              bottom: 0.9256477355957031,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.000489448313601315,
              top: 0.3828805685043335,
              right: 0.38021111488342285,
              bottom: 0.9229804277420044,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01527820061892271,
              top: 0.3184407651424408,
              right: 0.32954779267311096,
              bottom: 0.9611972570419312,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.008382592350244522,
              top: 0.30614882707595825,
              right: 0.31639447808265686,
              bottom: 0.9574105739593506,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004073029384016991,
              top: 0.30035272240638733,
              right: 0.3115312457084656,
              bottom: 0.9523669481277466,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.006205426529049873,
              top: 0.2977866530418396,
              right: 0.31361711025238037,
              bottom: 0.9498642086982727,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.012089036405086517,
              top: 0.29178550839424133,
              right: 0.3709373474121094,
              bottom: 0.9182795286178589,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0007372702239081264,
              top: 0.28143414855003357,
              right: 0.3899903893470764,
              bottom: 0.9056023359298706,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.014783822931349277,
              top: 0.2762579619884491,
              right: 0.40455159544944763,
              bottom: 0.9002338647842407,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03318915143609047,
              top: 0.2759733498096466,
              right: 0.4230000376701355,
              bottom: 0.8999332189559937,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.033782996237277985,
              top: 0.2653648555278778,
              right: 0.4838961362838745,
              bottom: 0.9249699115753174,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.05294087901711464,
              top: 0.2698161005973816,
              right: 0.5080322027206421,
              bottom: 0.9320691823959351,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07392013072967529,
              top: 0.27568519115448,
              right: 0.5294367074966431,
              bottom: 0.938164472579956,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08987615257501602,
              top: 0.26589110493659973,
              right: 0.5666355490684509,
              bottom: 0.9589275121688843,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19710125029087067,
              top: 0.2824580669403076,
              right: 0.5626541972160339,
              bottom: 0.9454541206359863,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23912183940410614,
              top: 0.2846089005470276,
              right: 0.5946533679962158,
              bottom: 0.9447607398033142,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3046606183052063,
              top: 0.2978198230266571,
              right: 0.6440954804420471,
              bottom: 0.929105281829834,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3902701437473297,
              top: 0.3092794120311737,
              right: 0.7130650281906128,
              bottom: 0.9104307889938354,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3434811532497406,
              top: 0.2990950345993042,
              right: 0.8683394193649292,
              bottom: 0.9295457601547241,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3799346685409546,
              top: 0.30164220929145813,
              right: 0.9210175275802612,
              bottom: 0.9342536926269531,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.43114182353019714,
              top: 0.29772645235061646,
              right: 0.9736077785491943,
              bottom: 0.930522084236145,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.48659026622772217,
              top: 0.29974135756492615,
              right: 1.0291721820831299,
              bottom: 0.9325524568557739,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.661712646484375,
              top: 0.29803529381752014,
              right: 0.9951884746551514,
              bottom: 0.9292715787887573,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7122931480407715,
              top: 0.2972414791584015,
              right: 1.0278230905532837,
              bottom: 0.9280130863189697,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7418405413627625,
              top: 0.2947130501270294,
              right: 1.0558669567108154,
              bottom: 0.9254457950592041,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7544321417808533,
              top: 0.2785540521144867,
              right: 1.0827534198760986,
              bottom: 0.9383904933929443,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8073407411575317,
              top: 0.3865305483341217,
              right: 1.0339062213897705,
              bottom: 0.8543885946273804,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.800104558467865,
              top: 0.40470948815345764,
              right: 1.0174883604049683,
              bottom: 0.8560032844543457,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7980514764785767,
              top: 0.40947481989860535,
              right: 1.0147778987884521,
              bottom: 0.8595826625823975,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7974234223365784,
              top: 0.4104790687561035,
              right: 1.0140950679779053,
              bottom: 0.8604880571365356,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7994871735572815,
              top: 0.41348859667778015,
              right: 1.0161542892456055,
              bottom: 0.8634893298149109,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7962567806243896,
              top: 0.40577009320259094,
              right: 1.0231029987335205,
              bottom: 0.876288115978241,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.797081708908081,
              top: 0.4047473073005676,
              right: 1.0247870683670044,
              bottom: 0.8769971132278442,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8436814546585083,
              top: 0.41514718532562256,
              right: 0.996994137763977,
              bottom: 0.7737861275672913,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8637740015983582,
              top: 0.391374796628952,
              right: 0.9976056218147278,
              bottom: 0.714112401008606,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8684512376785278,
              top: 0.3744651675224304,
              right: 1.0001238584518433,
              bottom: 0.6940178871154785,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8697589039802551,
              top: 0.36577093601226807,
              right: 1.0012563467025757,
              bottom: 0.6850653886795044,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8707531094551086,
              top: 0.36274245381355286,
              right: 1.0022358894348145,
              bottom: 0.6820152401924133,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8522356152534485,
              top: 0.3256300091743469,
              right: 1.0060557126998901,
              bottom: 0.7170763611793518,
            },
          },
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8449352383613586,
              top: 0.32288843393325806,
              right: 1.0029242038726807,
              bottom: 0.7151845097541809,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8406481742858887,
              top: 0.32886171340942383,
              right: 0.9994802474975586,
              bottom: 0.7050095796585083,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8384514451026917,
              top: 0.34649279713630676,
              right: 0.9984893798828125,
              bottom: 0.6927984952926636,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8435032367706299,
              top: 0.3780168294906616,
              right: 0.9972177743911743,
              bottom: 0.6748430728912354,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8457074165344238,
              top: 0.3846791684627533,
              right: 0.9985596537590027,
              bottom: 0.6772353649139404,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8466579914093018,
              top: 0.3866157829761505,
              right: 0.9994419813156128,
              bottom: 0.6788341403007507,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8476876616477966,
              top: 0.38726916909217834,
              right: 1.000465989112854,
              bottom: 0.679459273815155,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8174270391464233,
              top: 0.3205662965774536,
              right: 1.0078927278518677,
              bottom: 0.6903809905052185,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8092884421348572,
              top: 0.300703227519989,
              right: 1.002534031867981,
              bottom: 0.6766625642776489,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8011148571968079,
              top: 0.28946712613105774,
              right: 0.9946104288101196,
              bottom: 0.6659789085388184,
            },
          },
          {
            timeOffset: {
              low: 35,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7965691089630127,
              top: 0.2849804162979126,
              right: 0.9900857210159302,
              bottom: 0.6615386605262756,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.680061399936676,
              top: 0.2860291600227356,
              right: 1.0235767364501953,
              bottom: 0.6682285666465759,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6459232568740845,
              top: 0.2897149324417114,
              right: 1.0013123750686646,
              bottom: 0.6719988584518433,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6279149055480957,
              top: 0.2925899624824524,
              right: 0.9843047857284546,
              bottom: 0.6748809814453125,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6183828711509705,
              top: 0.2940231263637543,
              right: 0.9748566746711731,
              bottom: 0.6763147115707397,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5798319578170776,
              top: 0.3201606273651123,
              right: 0.9905331134796143,
              bottom: 0.6608436107635498,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5722284913063049,
              top: 0.32528212666511536,
              right: 0.9866870641708374,
              bottom: 0.6621062755584717,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.570433497428894,
              top: 0.32735809683799744,
              right: 0.9852184057235718,
              bottom: 0.6638471484184265,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5710304379463196,
              top: 0.3277819752693176,
              right: 0.9858427047729492,
              bottom: 0.6642428636550903,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5369358658790588,
              top: 0.3322361409664154,
              right: 0.989123523235321,
              bottom: 0.6312965154647827,
            },
          },
          {
            timeOffset: {
              low: 36,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5278322100639343,
              top: 0.3250417411327362,
              right: 0.9830979108810425,
              bottom: 0.6206767559051514,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5273184776306152,
              top: 0.3196655809879303,
              right: 0.9828497171401978,
              bottom: 0.6150051355361938,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5317171812057495,
              top: 0.3170038163661957,
              right: 0.987270712852478,
              bottom: 0.6123185753822327,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6119356751441956,
              top: 0.3046827018260956,
              right: 0.973863959312439,
              bottom: 0.6286786794662476,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6431063413619995,
              top: 0.30643171072006226,
              right: 0.9965866804122925,
              bottom: 0.632797122001648,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6588905453681946,
              top: 0.30807074904441833,
              right: 1.011726975440979,
              bottom: 0.6346167922019958,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6674181818962097,
              top: 0.30993393063545227,
              right: 1.0202008485794067,
              bottom: 0.636495053768158,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6848044991493225,
              top: 0.30210554599761963,
              right: 1.0094168186187744,
              bottom: 0.6450932025909424,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6861069798469543,
              top: 0.301920622587204,
              right: 1.0076823234558105,
              bottom: 0.6460834741592407,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6841021776199341,
              top: 0.3028571307659149,
              right: 1.0054218769073486,
              bottom: 0.6471189260482788,
            },
          },
          {
            timeOffset: {
              low: 37,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.681333065032959,
              top: 0.30450066924095154,
              right: 1.0026313066482544,
              bottom: 0.6487707495689392,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6646339297294617,
              top: 0.32069388031959534,
              right: 1.0053318738937378,
              bottom: 0.6481095552444458,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6589086651802063,
              top: 0.3265058994293213,
              right: 1.0004935264587402,
              bottom: 0.6521868705749512,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6554828882217407,
              top: 0.3298766016960144,
              right: 0.9971426725387573,
              bottom: 0.655410885810852,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6534605026245117,
              top: 0.3315035104751587,
              right: 0.9951266050338745,
              bottom: 0.6570254564285278,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6345873475074768,
              top: 0.35151350498199463,
              right: 1.0015701055526733,
              bottom: 0.6454315185546875,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6297000050544739,
              top: 0.35522225499153137,
              right: 0.9980869293212891,
              bottom: 0.6461294889450073,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6281827092170715,
              top: 0.35637181997299194,
              right: 0.9966902136802673,
              bottom: 0.6470204591751099,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.628044068813324,
              top: 0.3567521274089813,
              right: 0.9965616464614868,
              bottom: 0.6473791599273682,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7137101292610168,
              top: 0.36886951327323914,
              right: 0.976142942905426,
              bottom: 0.6551198959350586,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7411936521530151,
              top: 0.37534236907958984,
              right: 0.9938879013061523,
              bottom: 0.6608253717422485,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.751813530921936,
              top: 0.3779057264328003,
              right: 1.0037360191345215,
              bottom: 0.6633279323577881,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7556077837944031,
              top: 0.3789655268192291,
              right: 1.0074656009674072,
              bottom: 0.6643826961517334,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7548179626464844,
              top: 0.3865065276622772,
              right: 1.0078459978103638,
              bottom: 0.6561840176582336,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7534253001213074,
              top: 0.3865182399749756,
              right: 1.0062236785888672,
              bottom: 0.6548665761947632,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7517867088317871,
              top: 0.3859728276729584,
              right: 1.0045661926269531,
              bottom: 0.6542119979858398,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7498024106025696,
              top: 0.3854909837245941,
              right: 1.0025804042816162,
              bottom: 0.6537209749221802,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7479607462882996,
              top: 0.3887092173099518,
              right: 1.0012531280517578,
              bottom: 0.6498591899871826,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7468409538269043,
              top: 0.38868123292922974,
              right: 0.9996615052223206,
              bottom: 0.6491588354110718,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7461433410644531,
              top: 0.38851287961006165,
              right: 0.998924732208252,
              bottom: 0.6489346027374268,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7458547353744507,
              top: 0.38843265175819397,
              right: 0.9986327886581421,
              bottom: 0.6488497257232666,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7494152784347534,
              top: 0.3863924443721771,
              right: 0.9983330965042114,
              bottom: 0.6435551047325134,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7510200142860413,
              top: 0.3843759000301361,
              right: 0.9992324113845825,
              bottom: 0.6411794424057007,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7517767548561096,
              top: 0.3832949995994568,
              right: 0.9999302625656128,
              bottom: 0.640068531036377,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7521216869354248,
              top: 0.38320714235305786,
              right: 1.0002702474594116,
              bottom: 0.6399781703948975,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7499293088912964,
              top: 0.38017144799232483,
              right: 1.000940203666687,
              bottom: 0.650732696056366,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7495184540748596,
              top: 0.38209784030914307,
              right: 1.0004515647888184,
              bottom: 0.6533844470977783,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7492102980613708,
              top: 0.38341811299324036,
              right: 1.0001368522644043,
              bottom: 0.6547666192054749,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.749038577079773,
              top: 0.38401278853416443,
              right: 0.9999645948410034,
              bottom: 0.6553664803504944,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7460560202598572,
              top: 0.38195106387138367,
              right: 1.00062894821167,
              bottom: 0.6534370183944702,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7454119920730591,
              top: 0.3804032802581787,
              right: 1.0000369548797607,
              bottom: 0.6517685055732727,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7451223731040955,
              top: 0.3794168531894684,
              right: 0.999751627445221,
              bottom: 0.650771975517273,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7450452446937561,
              top: 0.378630667924881,
              right: 0.9996748566627502,
              bottom: 0.6499849557876587,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7496182918548584,
              top: 0.3797417879104614,
              right: 0.99857097864151,
              bottom: 0.65357506275177,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7512004375457764,
              top: 0.381298303604126,
              right: 0.9994162321090698,
              bottom: 0.6552461385726929,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.751914918422699,
              top: 0.3822406530380249,
              right: 1.0000687837600708,
              bottom: 0.6561980843544006,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7522122859954834,
              top: 0.3826793134212494,
              right: 1.0003609657287598,
              bottom: 0.6566375494003296,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7469303011894226,
              top: 0.3816754221916199,
              right: 1.001757025718689,
              bottom: 0.6607389450073242,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7459383010864258,
              top: 0.38218948245048523,
              right: 1.000584602355957,
              bottom: 0.6613474488258362,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7443169951438904,
              top: 0.38178128004074097,
              right: 0.9989480376243591,
              bottom: 0.6609472036361694,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7423945665359497,
              top: 0.3802311420440674,
              right: 0.9970242977142334,
              bottom: 0.6593977212905884,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6492069363594055,
              top: 0.35541537404060364,
              right: 1.0216991901397705,
              bottom: 0.6579544544219971,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6241309642791748,
              top: 0.34674644470214844,
              right: 1.0056320428848267,
              bottom: 0.6507643461227417,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6080708503723145,
              top: 0.34045150876045227,
              right: 0.9904019236564636,
              bottom: 0.6446056365966797,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5984612703323364,
              top: 0.3361569941043854,
              right: 0.9808622598648071,
              bottom: 0.6403226256370544,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.606857180595398,
              top: 0.31124988198280334,
              right: 0.9688405990600586,
              bottom: 0.6274404525756836,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6080406308174133,
              top: 0.2997487485408783,
              right: 0.9675241708755493,
              bottom: 0.616854190826416,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6073392033576965,
              top: 0.2939271330833435,
              right: 0.966617226600647,
              bottom: 0.6111077070236206,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.606730580329895,
              top: 0.2912867069244385,
              right: 0.9659913778305054,
              bottom: 0.6084736585617065,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6170047521591187,
              top: 0.28604522347450256,
              right: 0.9741134643554688,
              bottom: 0.6083543300628662,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6234620213508606,
              top: 0.28516989946365356,
              right: 0.9799959659576416,
              bottom: 0.6075584888458252,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6264559030532837,
              top: 0.28521743416786194,
              right: 0.9829418063163757,
              bottom: 0.607612669467926,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6266645193099976,
              top: 0.2849732041358948,
              right: 0.9831463694572449,
              bottom: 0.6073689460754395,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6533373594284058,
              top: 0.3004908263683319,
              right: 0.9366790652275085,
              bottom: 0.5404447317123413,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6481353640556335,
              top: 0.28643691539764404,
              right: 0.9246307611465454,
              bottom: 0.5193170309066772,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6429765820503235,
              top: 0.27897340059280396,
              right: 0.918950080871582,
              bottom: 0.5113141536712646,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6390098929405212,
              top: 0.27575844526290894,
              right: 0.914939820766449,
              bottom: 0.508054256439209,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6368549466133118,
              top: 0.2806607186794281,
              right: 0.8986785411834717,
              bottom: 0.49732691049575806,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.631320595741272,
              top: 0.28023606538772583,
              right: 0.8916407823562622,
              bottom: 0.4954689145088196,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6260466575622559,
              top: 0.2795909643173218,
              right: 0.8862431049346924,
              bottom: 0.4947059154510498,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6217835545539856,
              top: 0.27925077080726624,
              right: 0.881969690322876,
              bottom: 0.49435585737228394,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6509918570518494,
              top: 0.2808404862880707,
              right: 0.8697117567062378,
              bottom: 0.496609091758728,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6597838997840881,
              top: 0.28230586647987366,
              right: 0.8749083280563354,
              bottom: 0.4979422688484192,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6628023982048035,
              top: 0.2830245792865753,
              right: 0.8776431679725647,
              bottom: 0.49865055084228516,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6630521416664124,
              top: 0.2833937704563141,
              right: 0.8778691291809082,
              bottom: 0.4990188479423523,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6708510518074036,
              top: 0.28933101892471313,
              right: 0.8612583875656128,
              bottom: 0.4785890579223633,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6684004068374634,
              top: 0.2853958308696747,
              right: 0.856559693813324,
              bottom: 0.47207900881767273,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.666159451007843,
              top: 0.28273117542266846,
              right: 0.8541388511657715,
              bottom: 0.469208300113678,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6640223860740662,
              top: 0.2813461124897003,
              right: 0.8519867062568665,
              bottom: 0.46780604124069214,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6594187021255493,
              top: 0.2838306128978729,
              right: 0.8192471265792847,
              bottom: 0.461993545293808,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6482741236686707,
              top: 0.28370460867881775,
              right: 0.8050316572189331,
              bottom: 0.460877001285553,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6407049298286438,
              top: 0.2833999693393707,
              right: 0.7972095012664795,
              bottom: 0.46049076318740845,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6356137990951538,
              top: 0.28344669938087463,
              right: 0.7920972108840942,
              bottom: 0.4605306386947632,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6436039805412292,
              top: 0.28688907623291016,
              right: 0.771647572517395,
              bottom: 0.4537109136581421,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.642183780670166,
              top: 0.28639569878578186,
              right: 0.7674338817596436,
              bottom: 0.45211905241012573,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6406030058860779,
              top: 0.28569430112838745,
              right: 0.765623927116394,
              bottom: 0.4513275623321533,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.63941890001297,
              top: 0.285125195980072,
              right: 0.7644206285476685,
              bottom: 0.4507508873939514,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.637815535068512,
              top: 0.28544801473617554,
              right: 0.7604596614837646,
              bottom: 0.4441455602645874,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6356900930404663,
              top: 0.28366121649742126,
              right: 0.7579472064971924,
              bottom: 0.44154688715934753,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6321740746498108,
              top: 0.28236544132232666,
              right: 0.7543992400169373,
              bottom: 0.4401840567588806,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6284060478210449,
              top: 0.28128916025161743,
              right: 0.7506285309791565,
              bottom: 0.4391021728515625,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6051795482635498,
              top: 0.2819035053253174,
              right: 0.7574366927146912,
              bottom: 0.45043817162513733,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5999939441680908,
              top: 0.2853333652019501,
              right: 0.7544205784797668,
              bottom: 0.4545412063598633,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5977431535720825,
              top: 0.2872929275035858,
              right: 0.7523557543754578,
              bottom: 0.4565584659576416,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5972551107406616,
              top: 0.28812891244888306,
              right: 0.751883327960968,
              bottom: 0.45739930868148804,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.580202579498291,
              top: 0.2923888564109802,
              right: 0.7892806529998779,
              bottom: 0.4380645453929901,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5842056274414062,
              top: 0.2890944480895996,
              right: 0.7976619601249695,
              bottom: 0.4325435757637024,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5893499851226807,
              top: 0.2858481705188751,
              right: 0.8032024502754211,
              bottom: 0.4290958642959595,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5946492552757263,
              top: 0.2844449579715729,
              right: 0.808535099029541,
              bottom: 0.42767566442489624,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5594335794448853,
              top: 0.27754098176956177,
              right: 0.8295025825500488,
              bottom: 0.44552844762802124,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5543333888053894,
              top: 0.2801531255245209,
              right: 0.8288928270339966,
              bottom: 0.4497836232185364,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5543078184127808,
              top: 0.2833579480648041,
              right: 0.8292707800865173,
              bottom: 0.45313605666160583,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5529673099517822,
              top: 0.2812007665634155,
              right: 0.8406882286071777,
              bottom: 0.4586257040500641,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6283566951751709,
              top: 0.28369176387786865,
              right: 0.8201862573623657,
              bottom: 0.4641285538673401,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6565275192260742,
              top: 0.28573113679885864,
              right: 0.8395942449569702,
              bottom: 0.4659554660320282,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6673467755317688,
              top: 0.2864871621131897,
              right: 0.8498090505599976,
              bottom: 0.4666968286037445,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6728020906448364,
              top: 0.2869267463684082,
              right: 0.8552141189575195,
              bottom: 0.4671351909637451,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6643848419189453,
              top: 0.2873055934906006,
              right: 0.8715671300888062,
              bottom: 0.4663144648075104,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6645978093147278,
              top: 0.2875727117061615,
              right: 0.8736763000488281,
              bottom: 0.46625012159347534,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6623258590698242,
              top: 0.2869364619255066,
              right: 0.8715699315071106,
              bottom: 0.465584933757782,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6587518453598022,
              top: 0.2866884171962738,
              right: 0.8680098056793213,
              bottom: 0.4653344750404358,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6608545184135437,
              top: 0.2851840555667877,
              right: 0.8440294861793518,
              bottom: 0.4687806963920593,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6552595496177673,
              top: 0.2863629162311554,
              right: 0.8360307812690735,
              bottom: 0.4701958894729614,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6521822214126587,
              top: 0.28700900077819824,
              right: 0.8327558636665344,
              bottom: 0.47086137533187866,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6510795950889587,
              top: 0.2875830829143524,
              right: 0.8316366672515869,
              bottom: 0.47143709659576416,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6855499148368835,
              top: 0.28926506638526917,
              right: 0.8221228122711182,
              bottom: 0.48884713649749756,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6961053609848022,
              top: 0.29495203495025635,
              right: 0.8288708329200745,
              bottom: 0.49539217352867126,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7031312584877014,
              top: 0.299077570438385,
              right: 0.8355687260627747,
              bottom: 0.4995916485786438,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7071203589439392,
              top: 0.3019656836986542,
              right: 0.8395302891731262,
              bottom: 0.5024859309196472,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6957187652587891,
              top: 0.31548017263412476,
              right: 0.8622435927391052,
              bottom: 0.5025637149810791,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6967006325721741,
              top: 0.31976747512817383,
              right: 0.8659059405326843,
              bottom: 0.50532066822052,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6966827511787415,
              top: 0.3214569389820099,
              right: 0.866107165813446,
              bottom: 0.5068850517272949,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.696079671382904,
              top: 0.3223232328891754,
              right: 0.8655224442481995,
              bottom: 0.50774085521698,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6824483275413513,
              top: 0.3360590636730194,
              right: 0.8665262460708618,
              bottom: 0.5011566281318665,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6784422397613525,
              top: 0.339374840259552,
              right: 0.8635334372520447,
              bottom: 0.5025719404220581,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6764954924583435,
              top: 0.3407220244407654,
              right: 0.8616727590560913,
              bottom: 0.503757655620575,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6762176156044006,
              top: 0.34134364128112793,
              right: 0.861402153968811,
              bottom: 0.5043656826019287,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6746121048927307,
              top: 0.3476448655128479,
              right: 0.8685978651046753,
              bottom: 0.5072205066680908,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6767640113830566,
              top: 0.35085925459861755,
              right: 0.8711694478988647,
              bottom: 0.5097748041152954,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6787841320037842,
              top: 0.35253167152404785,
              right: 0.8732253313064575,
              bottom: 0.5113909840583801,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6798960566520691,
              top: 0.3533523976802826,
              right: 0.8743402361869812,
              bottom: 0.51220703125,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6794096827507019,
              top: 0.35806843638420105,
              right: 0.8817352056503296,
              bottom: 0.507416844367981,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.680938184261322,
              top: 0.3583351969718933,
              right: 0.8836775422096252,
              bottom: 0.506850004196167,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6816355586051941,
              top: 0.35805511474609375,
              right: 0.8844101428985596,
              bottom: 0.5064991116523743,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6817229986190796,
              top: 0.35774677991867065,
              right: 0.8845005035400391,
              bottom: 0.5061848163604736,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6778889894485474,
              top: 0.35787245631217957,
              right: 0.8846942186355591,
              bottom: 0.5058932900428772,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6763380765914917,
              top: 0.3578515350818634,
              right: 0.8828468918800354,
              bottom: 0.5057770013809204,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.675277590751648,
              top: 0.3578146994113922,
              right: 0.881761372089386,
              bottom: 0.5057320594787598,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6747332811355591,
              top: 0.35779598355293274,
              right: 0.88121497631073,
              bottom: 0.5057126879692078,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6751230359077454,
              top: 0.3565463423728943,
              right: 0.880865216255188,
              bottom: 0.5059301257133484,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.675398051738739,
              top: 0.35655394196510315,
              right: 0.880969226360321,
              bottom: 0.5060251355171204,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6756007671356201,
              top: 0.356620192527771,
              right: 0.881157636642456,
              bottom: 0.5060986876487732,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6757583618164062,
              top: 0.3566834032535553,
              right: 0.8813140392303467,
              bottom: 0.5061625242233276,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6805921792984009,
              top: 0.3583681583404541,
              right: 0.879101037979126,
              bottom: 0.5084319114685059,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6820752024650574,
              top: 0.3595770597457886,
              right: 0.8794040679931641,
              bottom: 0.5095823407173157,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6825752258300781,
              top: 0.3601648509502411,
              right: 0.879806399345398,
              bottom: 0.5101653337478638,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.682745635509491,
              top: 0.36037153005599976,
              right: 0.8799685835838318,
              bottom: 0.5103715658187866,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6745787858963013,
              top: 0.359299898147583,
              right: 0.8852325081825256,
              bottom: 0.5108774900436401,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.673126757144928,
              top: 0.3589203953742981,
              right: 0.8841987252235413,
              bottom: 0.5104842185974121,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6718260049819946,
              top: 0.3586024045944214,
              right: 0.8829338550567627,
              bottom: 0.5101649761199951,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6711220741271973,
              top: 0.35839733481407166,
              right: 0.8822329044342041,
              bottom: 0.5099598169326782,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6820096373558044,
              top: 0.35442936420440674,
              right: 0.8728603720664978,
              bottom: 0.49511057138442993,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6676337718963623,
              top: 0.3507384955883026,
              right: 0.8813592195510864,
              bottom: 0.5085998773574829,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.665177583694458,
              top: 0.35273241996765137,
              right: 0.8807435035705566,
              bottom: 0.5119761228561401,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6643106937408447,
              top: 0.35466548800468445,
              right: 0.8800367712974548,
              bottom: 0.5140294432640076,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6661875247955322,
              top: 0.3555070757865906,
              right: 0.8795912265777588,
              bottom: 0.5079041123390198,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6668568849563599,
              top: 0.3539401590824127,
              right: 0.8798567056655884,
              bottom: 0.5055723786354065,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6672354340553284,
              top: 0.35280609130859375,
              right: 0.8802014589309692,
              bottom: 0.5043744444847107,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6674749255180359,
              top: 0.35224002599716187,
              right: 0.8804381489753723,
              bottom: 0.503803014755249,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6714813113212585,
              top: 0.35433584451675415,
              right: 0.8750494718551636,
              bottom: 0.5050889253616333,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.671596109867096,
              top: 0.3555319607257843,
              right: 0.8735897541046143,
              bottom: 0.5060719847679138,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6712920069694519,
              top: 0.3561601936817169,
              right: 0.8731557130813599,
              bottom: 0.5066826343536377,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6711323261260986,
              top: 0.35645559430122375,
              right: 0.8729851841926575,
              bottom: 0.5069765448570251,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6672574877738953,
              top: 0.35837507247924805,
              right: 0.876721978187561,
              bottom: 0.5067189335823059,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6668879389762878,
              top: 0.3589923679828644,
              right: 0.8761646151542664,
              bottom: 0.5069452524185181,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6661285758018494,
              top: 0.35916587710380554,
              right: 0.8753892779350281,
              bottom: 0.5070855617523193,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6656969785690308,
              top: 0.3591703772544861,
              right: 0.8749563694000244,
              bottom: 0.5070872902870178,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6729902625083923,
              top: 0.36179932951927185,
              right: 0.8708974719047546,
              bottom: 0.5069841742515564,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6745697259902954,
              top: 0.3628396987915039,
              right: 0.8709986209869385,
              bottom: 0.5076637268066406,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6750688552856445,
              top: 0.36326318979263306,
              right: 0.8713762760162354,
              bottom: 0.5080575942993164,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6752543449401855,
              top: 0.36339715123176575,
              right: 0.8715515732765198,
              bottom: 0.5081890225410461,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.675719678401947,
              top: 0.3603965938091278,
              right: 0.8709636330604553,
              bottom: 0.5142077803611755,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6755591034889221,
              top: 0.3610074818134308,
              right: 0.8700704574584961,
              bottom: 0.515144407749176,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6752275228500366,
              top: 0.3613285422325134,
              right: 0.8696775436401367,
              bottom: 0.5154927372932434,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6750187277793884,
              top: 0.36110934615135193,
              right: 0.8694636821746826,
              bottom: 0.5152758359909058,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.674160897731781,
              top: 0.3537953794002533,
              right: 0.8703266382217407,
              bottom: 0.5167253017425537,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6735307574272156,
              top: 0.3508981168270111,
              right: 0.8698160648345947,
              bottom: 0.5143883228302002,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6731859445571899,
              top: 0.3485335409641266,
              right: 0.8694813251495361,
              bottom: 0.512070894241333,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6730239987373352,
              top: 0.3473421037197113,
              right: 0.8693202137947083,
              bottom: 0.5108833909034729,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6942915320396423,
              top: 0.32416868209838867,
              right: 0.8690429329872131,
              bottom: 0.5017924308776855,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7029717564582825,
              top: 0.3132101595401764,
              right: 0.8754053115844727,
              bottom: 0.49177059531211853,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7083398699760437,
              top: 0.30793496966362,
              right: 0.8805798292160034,
              bottom: 0.48657363653182983,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7112018465995789,
              top: 0.3060968220233917,
              right: 0.8834255933761597,
              bottom: 0.48474204540252686,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7257176041603088,
              top: 0.2878958284854889,
              right: 0.8723965883255005,
              bottom: 0.49310874938964844,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7278069853782654,
              top: 0.284361332654953,
              right: 0.871601402759552,
              bottom: 0.491471529006958,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7270157933235168,
              top: 0.2831819951534271,
              right: 0.8705574870109558,
              bottom: 0.4904584288597107,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7249128222465515,
              top: 0.28247782588005066,
              right: 0.8684332966804504,
              bottom: 0.48976820707321167,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7099443674087524,
              top: 0.2823278307914734,
              right: 0.8636772632598877,
              bottom: 0.4879337251186371,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7025241851806641,
              top: 0.28222140669822693,
              right: 0.8570787906646729,
              bottom: 0.48746299743652344,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6977912783622742,
              top: 0.282911479473114,
              right: 0.852414608001709,
              bottom: 0.4881225824356079,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6937122941017151,
              top: 0.2838120460510254,
              right: 0.8483414053916931,
              bottom: 0.48902061581611633,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6668781042098999,
              top: 0.28647804260253906,
              right: 0.8553420305252075,
              bottom: 0.4811875820159912,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6608719825744629,
              top: 0.28601834177970886,
              right: 0.8514251112937927,
              bottom: 0.47936946153640747,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6593731641769409,
              top: 0.28613173961639404,
              right: 0.850098192691803,
              bottom: 0.4793711304664612,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6604936718940735,
              top: 0.2871990501880646,
              right: 0.8512331247329712,
              bottom: 0.4804290533065796,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6481789350509644,
              top: 0.28845110535621643,
              right: 0.8704376816749573,
              bottom: 0.4840760827064514,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6502155065536499,
              top: 0.29019877314567566,
              right: 0.8749756813049316,
              bottom: 0.48601388931274414,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6499143242835999,
              top: 0.2874637246131897,
              right: 0.8850717544555664,
              bottom: 0.4923599362373352,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.65489661693573,
              top: 0.28911998867988586,
              right: 0.8909265995025635,
              bottom: 0.4947783350944519,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6492826342582703,
              top: 0.2842845320701599,
              right: 0.9051569700241089,
              bottom: 0.5137393474578857,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6513187885284424,
              top: 0.28794440627098083,
              right: 0.9085944890975952,
              bottom: 0.5190401673316956,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6537131667137146,
              top: 0.2909753918647766,
              right: 0.9111095070838928,
              bottom: 0.5222124457359314,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6566267609596252,
              top: 0.2930426001548767,
              right: 0.9140332341194153,
              bottom: 0.5242915153503418,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6435075402259827,
              top: 0.2898964285850525,
              right: 0.9602376222610474,
              bottom: 0.540885329246521,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6523560881614685,
              top: 0.2934926450252533,
              right: 0.9732468724250793,
              bottom: 0.5459533929824829,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.661318838596344,
              top: 0.29631975293159485,
              right: 0.9825810790061951,
              bottom: 0.5489118695259094,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.668499231338501,
              top: 0.29702046513557434,
              right: 0.9897927045822144,
              bottom: 0.5496236085891724,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.71973717212677,
              top: 0.28647541999816895,
              right: 0.988449215888977,
              bottom: 0.5828167200088501,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7400342226028442,
              top: 0.292890340089798,
              right: 1.0043320655822754,
              bottom: 0.5925800800323486,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7509833574295044,
              top: 0.2909916043281555,
              right: 1.0267808437347412,
              bottom: 0.6048011779785156,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7648099660873413,
              top: 0.2945554554462433,
              right: 1.041572093963623,
              bottom: 0.6095495223999023,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8136292695999146,
              top: 0.2794591784477234,
              right: 1.0097097158432007,
              bottom: 0.6795457601547241,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8227369785308838,
              top: 0.2932126224040985,
              right: 1.0114262104034424,
              bottom: 0.7003339529037476,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8257957100868225,
              top: 0.30598184466362,
              right: 1.0138198137283325,
              bottom: 0.7137361764907837,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8272101283073425,
              top: 0.32006707787513733,
              right: 1.0151782035827637,
              bottom: 0.7278746962547302,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8489442467689514,
              top: 0.3565400242805481,
              right: 1.0009926557540894,
              bottom: 0.7846479415893555,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8523619174957275,
              top: 0.3857721984386444,
              right: 1.0008420944213867,
              bottom: 0.8153252601623535,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8507004380226135,
              top: 0.40416279435157776,
              right: 0.9988764524459839,
              bottom: 0.8338390588760376,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8455157279968262,
              top: 0.4047798216342926,
              right: 1.0004525184631348,
              bottom: 0.8540298938751221,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8580063581466675,
              top: 0.429433673620224,
              right: 0.9968077540397644,
              bottom: 0.838613748550415,
            },
          },
          {
            timeOffset: {
              low: 58,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8624973297119141,
              top: 0.43142464756965637,
              right: 0.9996774792671204,
              bottom: 0.836955189704895,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8654491305351257,
              top: 0.4305662214756012,
              right: 1.0024981498718262,
              bottom: 0.8358014822006226,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8640827536582947,
              top: 0.42069852352142334,
              right: 1.00705885887146,
              bottom: 0.8445186614990234,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.9048434495925903,
              top: 0.4536854922771454,
              right: 0.9927489757537842,
              bottom: 0.9369766712188721,
            },
          },
        ],
      },
      {
        name: 'footwear',
        confidence: 0.7902862429618835,
        frames: [
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0019498580368235707,
              top: 0.8153469562530518,
              right: 0.12619979679584503,
              bottom: 0.8959959745407104,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0005422572139650583,
              top: 0.8374140858650208,
              right: 0.13496042788028717,
              bottom: 0.9214386940002441,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004007378593087196,
              top: 0.8455859422683716,
              right: 0.13573512434959412,
              bottom: 0.9290732145309448,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004138744901865721,
              top: 0.8465187549591064,
              right: 0.14013713598251343,
              bottom: 0.933082103729248,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005024082493036985,
              top: 0.8444654941558838,
              right: 0.13996891677379608,
              bottom: 0.9345729947090149,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.019341453909873962,
              top: 0.8506087064743042,
              right: 0.1360793262720108,
              bottom: 0.9318857789039612,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.6642070412635803,
        frames: [
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0027348101139068604,
              top: 0.9069678783416748,
              right: 0.13254404067993164,
              bottom: 0.9985648393630981,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0018448104383423924,
              top: 0.9332928657531738,
              right: 0.1277851015329361,
              bottom: 1.0249594449996948,
            },
          },
          {
            timeOffset: {
              low: 22,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18272341787815094,
              top: 0.9377477169036865,
              right: 0.35922348499298096,
              bottom: 1.0000590085983276,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.6311547756195068,
        frames: [
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.215067520737648,
              top: 0.9438197612762451,
              right: 0.384491503238678,
              bottom: 0.9970836639404297,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22128672897815704,
              top: 0.9447901844978333,
              right: 0.39073115587234497,
              bottom: 0.9979153871536255,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22913303971290588,
              top: 0.9457361102104187,
              right: 0.3909379839897156,
              bottom: 0.9964737892150879,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21662840247154236,
              top: 0.9459678530693054,
              right: 0.3896338641643524,
              bottom: 0.998107373714447,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16921816766262054,
              top: 0.9458198547363281,
              right: 0.39025306701660156,
              bottom: 0.9986916780471802,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16320551931858063,
              top: 0.9456916451454163,
              right: 0.3844783902168274,
              bottom: 0.9987939596176147,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16446132957935333,
              top: 0.9453060030937195,
              right: 0.38575559854507446,
              bottom: 0.9984290599822998,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15223786234855652,
              top: 0.9390915036201477,
              right: 0.38138917088508606,
              bottom: 0.9991763234138489,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14760740101337433,
              top: 0.9377861022949219,
              right: 0.37634897232055664,
              bottom: 0.9976979494094849,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15021172165870667,
              top: 0.9356831908226013,
              right: 0.3789186477661133,
              bottom: 0.9955803751945496,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15143635869026184,
              top: 0.9348348379135132,
              right: 0.3801403343677521,
              bottom: 0.9947307705879211,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1501467078924179,
              top: 0.9340054392814636,
              right: 0.37885046005249023,
              bottom: 0.993901252746582,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1871601939201355,
              top: 0.9106641411781311,
              right: 0.34302592277526855,
              bottom: 1.0023908615112305,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1672649383544922,
              top: 0.9063072800636292,
              right: 0.34543368220329285,
              bottom: 0.9975154995918274,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1678234487771988,
              top: 0.9022642970085144,
              right: 0.3397365212440491,
              bottom: 0.9976059794425964,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1529107242822647,
              top: 0.9140475392341614,
              right: 0.3376784920692444,
              bottom: 0.993430495262146,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15572626888751984,
              top: 0.9076792597770691,
              right: 0.33766865730285645,
              bottom: 0.9980064034461975,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15872196853160858,
              top: 0.9049406051635742,
              right: 0.33698031306266785,
              bottom: 0.9983461499214172,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.15870116651058197,
              top: 0.9059026837348938,
              right: 0.338731586933136,
              bottom: 0.9971420764923096,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16183383762836456,
              top: 0.906322717666626,
              right: 0.33993226289749146,
              bottom: 0.9970124363899231,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16405613720417023,
              top: 0.9071869254112244,
              right: 0.34192776679992676,
              bottom: 0.9961652159690857,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17695626616477966,
              top: 0.9043840169906616,
              right: 0.33717578649520874,
              bottom: 0.9985381364822388,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17778930068016052,
              top: 0.9041553735733032,
              right: 0.3396032154560089,
              bottom: 0.9994451999664307,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.18076859414577484,
              top: 0.9037548899650574,
              right: 0.3420933187007904,
              bottom: 0.9999344348907471,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19225594401359558,
              top: 0.9113085269927979,
              right: 0.3399165868759155,
              bottom: 0.9977431297302246,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17738929390907288,
              top: 0.9177979230880737,
              right: 0.3471319377422333,
              bottom: 0.9979922771453857,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16865450143814087,
              top: 0.9211358428001404,
              right: 0.34698858857154846,
              bottom: 0.9988548755645752,
            },
          },
        ],
      },
      {
        name: 'table top',
        confidence: 0.5082176327705383,
        frames: [
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16733518242835999,
              top: 0.399294912815094,
              right: 0.9381028413772583,
              bottom: 0.7213678956031799,
            },
          },
        ],
      },
      {
        name: 'billiard table',
        confidence: 0.5580525994300842,
        frames: [
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17244720458984375,
              top: 0.40033799409866333,
              right: 0.9431476593017578,
              bottom: 0.754689633846283,
            },
          },
        ],
      },
      {
        name: 'shorts',
        confidence: 0.6592491865158081,
        frames: [
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011247798800468445,
              top: 0.7787516713142395,
              right: 0.36131536960601807,
              bottom: 0.9321232438087463,
            },
          },
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011785311624407768,
              top: 0.7636745572090149,
              right: 0.3596971929073334,
              bottom: 0.9245237112045288,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01374547928571701,
              top: 0.749316930770874,
              right: 0.3681955933570862,
              bottom: 0.9121347665786743,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.016133209690451622,
              top: 0.7418477535247803,
              right: 0.3690820336341858,
              bottom: 0.9092005491256714,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.021527603268623352,
              top: 0.7416410446166992,
              right: 0.36526089906692505,
              bottom: 0.9107702374458313,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.026157321408391,
              top: 0.7467441558837891,
              right: 0.35307005047798157,
              bottom: 0.9143609404563904,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.02590395323932171,
              top: 0.7471449971199036,
              right: 0.35276082158088684,
              bottom: 0.9148457646369934,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.027375712990760803,
              top: 0.7480447292327881,
              right: 0.3542279601097107,
              bottom: 0.9157524108886719,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.028796149417757988,
              top: 0.7491992115974426,
              right: 0.355648010969162,
              bottom: 0.9169074892997742,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.030115630477666855,
              top: 0.7498816847801208,
              right: 0.3569674789905548,
              bottom: 0.9175900220870972,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03029133751988411,
              top: 0.7493524551391602,
              right: 0.35714319348335266,
              bottom: 0.9170607924461365,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03124845027923584,
              top: 0.7474859356880188,
              right: 0.3581002950668335,
              bottom: 0.9151942729949951,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.031219491735100746,
              top: 0.7442880868911743,
              right: 0.35807132720947266,
              bottom: 0.9119964241981506,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.055876489728689194,
              top: 0.748999297618866,
              right: 0.3427671492099762,
              bottom: 0.913547694683075,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0524759441614151,
              top: 0.7474509477615356,
              right: 0.3395012617111206,
              bottom: 0.9120314717292786,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.04413368180394173,
              top: 0.7463294863700867,
              right: 0.3311697840690613,
              bottom: 0.9109126329421997,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03378456458449364,
              top: 0.7259773015975952,
              right: 0.3291560411453247,
              bottom: 0.9173364639282227,
            },
          },
        ],
      },
      {
        name: 'clothing',
        confidence: 0.5255244374275208,
        frames: [
          {
            timeOffset: {
              low: 23,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004299148917198181,
              top: 0.26425260305404663,
              right: 0.4219617247581482,
              bottom: 0.9878645539283752,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.004299148917198181,
              top: 0.26425260305404663,
              right: 0.4219617247581482,
              bottom: 0.9878645539283752,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.000004610098130797269,
              top: 0.270381897687912,
              right: 0.4024322032928467,
              bottom: 0.9992353916168213,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005533861927688122,
              top: 0.27293792366981506,
              right: 0.439243882894516,
              bottom: 0.9956984519958496,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5560706853866577,
        frames: [
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8408129215240479,
              top: 0.4610464870929718,
              right: 0.9983320236206055,
              bottom: 0.639816164970398,
            },
          },
          {
            timeOffset: {
              low: 24,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8407408595085144,
              top: 0.4609376788139343,
              right: 0.9981484413146973,
              bottom: 0.6395837068557739,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8407405614852905,
              top: 0.4609372615814209,
              right: 0.9981479644775391,
              bottom: 0.6395831108093262,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8407406210899353,
              top: 0.4609373211860657,
              right: 0.9981480240821838,
              bottom: 0.639583170413971,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8396904468536377,
              top: 0.46167266368865967,
              right: 0.9985201358795166,
              bottom: 0.6382699012756348,
            },
          },
        ],
      },
      {
        name: 'billiard table',
        confidence: 0.660162627696991,
        frames: [
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22226712107658386,
              top: 0.39018020033836365,
              right: 0.9218021631240845,
              bottom: 0.684704065322876,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.5465708374977112,
        frames: [
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08179637789726257,
              top: 0.8192145824432373,
              right: 0.18290284276008606,
              bottom: 0.9084712266921997,
            },
          },
        ],
      },
      {
        name: 'shorts',
        confidence: 0.5534391403198242,
        frames: [
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005041211843490601,
              top: 0.30212682485580444,
              right: 0.3775080740451813,
              bottom: 0.9963739514350891,
            },
          },
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0034254109486937523,
              top: 0.735702633857727,
              right: 0.2841777205467224,
              bottom: 0.9170464873313904,
            },
          },
        ],
      },
      {
        name: 'top',
        confidence: 0.5176637172698975,
        frames: [
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0038781166076660156,
              top: 0.4349133372306824,
              right: 0.3350374698638916,
              bottom: 0.7845494151115417,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.6811406016349792,
        frames: [
          {
            timeOffset: {
              low: 25,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09077867120504379,
              top: 0.781956136226654,
              right: 0.23654654622077942,
              bottom: 0.8705835938453674,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08790578693151474,
              top: 0.7871366143226624,
              right: 0.23552441596984863,
              bottom: 0.8732117414474487,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08842095732688904,
              top: 0.783557116985321,
              right: 0.2373274713754654,
              bottom: 0.8715727925300598,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08887691795825958,
              top: 0.7791101336479187,
              right: 0.23703478276729584,
              bottom: 0.8712976574897766,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08902980387210846,
              top: 0.7780753374099731,
              right: 0.237178772687912,
              bottom: 0.870262861251831,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09139421582221985,
              top: 0.7820099592208862,
              right: 0.23385848104953766,
              bottom: 0.8668867945671082,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09172678738832474,
              top: 0.78163743019104,
              right: 0.23494568467140198,
              bottom: 0.8668290972709656,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09176072478294373,
              top: 0.7810823321342468,
              right: 0.23525406420230865,
              bottom: 0.8664801120758057,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08852256089448929,
              top: 0.7809542417526245,
              right: 0.23669716715812683,
              bottom: 0.86803138256073,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09184858202934265,
              top: 0.7805240154266357,
              right: 0.23431280255317688,
              bottom: 0.8696727156639099,
            },
          },
          {
            timeOffset: {
              low: 26,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0931595042347908,
              top: 0.7796875834465027,
              right: 0.2362101972103119,
              bottom: 0.8704525232315063,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09374012798070908,
              top: 0.7838059663772583,
              right: 0.2340846061706543,
              bottom: 0.8719276785850525,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09253095090389252,
              top: 0.7867916822433472,
              right: 0.23300950229167938,
              bottom: 0.8730447888374329,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09055774658918381,
              top: 0.7839804887771606,
              right: 0.23399949073791504,
              bottom: 0.8714282512664795,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08973325043916702,
              top: 0.783191978931427,
              right: 0.23589378595352173,
              bottom: 0.8697783350944519,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09048543125391006,
              top: 0.7825918793678284,
              right: 0.23599740862846375,
              bottom: 0.8690859079360962,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0913112461566925,
              top: 0.7813802361488342,
              right: 0.23536056280136108,
              bottom: 0.8694666624069214,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08957365155220032,
              top: 0.7817275524139404,
              right: 0.2374255359172821,
              bottom: 0.8689967393875122,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09170980006456375,
              top: 0.7842832207679749,
              right: 0.23016366362571716,
              bottom: 0.8712361454963684,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09049567580223083,
              top: 0.7874698042869568,
              right: 0.23020432889461517,
              bottom: 0.8726087808609009,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09046556800603867,
              top: 0.7894189953804016,
              right: 0.23014867305755615,
              bottom: 0.8733744621276855,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09038057178258896,
              top: 0.789550244808197,
              right: 0.2315678596496582,
              bottom: 0.875338613986969,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09085311740636826,
              top: 0.7890458106994629,
              right: 0.23065471649169922,
              bottom: 0.8755830526351929,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09049319475889206,
              top: 0.7850367426872253,
              right: 0.23506727814674377,
              bottom: 0.8733858466148376,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09266871958971024,
              top: 0.7870321273803711,
              right: 0.2322753667831421,
              bottom: 0.8728857040405273,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0920126885175705,
              top: 0.7876509428024292,
              right: 0.23162716627120972,
              bottom: 0.8732669353485107,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09178321808576584,
              top: 0.7881389260292053,
              right: 0.23293107748031616,
              bottom: 0.8737701177597046,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09290733933448792,
              top: 0.7887131571769714,
              right: 0.23239962756633759,
              bottom: 0.8743877410888672,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09241323173046112,
              top: 0.7886359095573425,
              right: 0.23285925388336182,
              bottom: 0.8738988637924194,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09248655289411545,
              top: 0.7893158793449402,
              right: 0.2311849594116211,
              bottom: 0.873312771320343,
            },
          },
          {
            timeOffset: {
              low: 28,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09131522476673126,
              top: 0.787710428237915,
              right: 0.23187792301177979,
              bottom: 0.8736203908920288,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.088238924741745,
              top: 0.782412052154541,
              right: 0.23461715877056122,
              bottom: 0.8720425367355347,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09053178876638412,
              top: 0.7824673056602478,
              right: 0.2348436713218689,
              bottom: 0.8689008951187134,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08832788467407227,
              top: 0.7824066877365112,
              right: 0.2365826964378357,
              bottom: 0.8686190843582153,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08836980164051056,
              top: 0.7820751070976257,
              right: 0.2353120893239975,
              bottom: 0.8684729337692261,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08935815095901489,
              top: 0.7814885973930359,
              right: 0.2363913655281067,
              bottom: 0.8697707653045654,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09021926671266556,
              top: 0.7811334729194641,
              right: 0.23574286699295044,
              bottom: 0.8712700009346008,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0905216783285141,
              top: 0.7818722724914551,
              right: 0.23616300523281097,
              bottom: 0.8703292608261108,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09112861752510071,
              top: 0.7844357490539551,
              right: 0.23250922560691833,
              bottom: 0.8718702793121338,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09046497195959091,
              top: 0.7867820858955383,
              right: 0.23167335987091064,
              bottom: 0.8735540509223938,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0895005464553833,
              top: 0.7880125045776367,
              right: 0.2322850227355957,
              bottom: 0.8745385408401489,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09030355513095856,
              top: 0.788179874420166,
              right: 0.2316274493932724,
              bottom: 0.8754169940948486,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08979669213294983,
              top: 0.7881742715835571,
              right: 0.23186565935611725,
              bottom: 0.8755164742469788,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09040725976228714,
              top: 0.7884380221366882,
              right: 0.23173204064369202,
              bottom: 0.8750460743904114,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08899357914924622,
              top: 0.7864640355110168,
              right: 0.23322033882141113,
              bottom: 0.8748589754104614,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09030995517969131,
              top: 0.7859616279602051,
              right: 0.232485830783844,
              bottom: 0.8741108775138855,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0909823626279831,
              top: 0.7876273393630981,
              right: 0.2312198430299759,
              bottom: 0.8728882670402527,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08998391032218933,
              top: 0.785721480846405,
              right: 0.2307596653699875,
              bottom: 0.87315833568573,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09029808640480042,
              top: 0.7840567231178284,
              right: 0.23481212556362152,
              bottom: 0.8719896078109741,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09019958227872849,
              top: 0.7831651568412781,
              right: 0.23698332905769348,
              bottom: 0.8712680339813232,
            },
          },
          {
            timeOffset: {
              low: 30,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09335415810346603,
              top: 0.7816506624221802,
              right: 0.23687070608139038,
              bottom: 0.8699260950088501,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10145209729671478,
              top: 0.7833800315856934,
              right: 0.23696449398994446,
              bottom: 0.8700796365737915,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10690563172101974,
              top: 0.7845418453216553,
              right: 0.2374711036682129,
              bottom: 0.8697040677070618,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11741273105144501,
              top: 0.785853385925293,
              right: 0.2390572428703308,
              bottom: 0.8642539381980896,
            },
          },
        ],
      },
      {
        name: 'dog',
        confidence: 0.6906092166900635,
        frames: [
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09780852496623993,
              top: 0.4007238447666168,
              right: 0.28211599588394165,
              bottom: 0.490111380815506,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09629862010478973,
              top: 0.4000011086463928,
              right: 0.2805579602718353,
              bottom: 0.48958414793014526,
            },
          },
          {
            timeOffset: {
              low: 27,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10221096128225327,
              top: 0.4010862410068512,
              right: 0.2777922749519348,
              bottom: 0.4822932481765747,
            },
          },
        ],
      },
      {
        name: 'clothing',
        confidence: 0.5879096388816833,
        frames: [
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.001461997628211975,
              top: 0.5195456743240356,
              right: 0.30983978509902954,
              bottom: 0.7995522022247314,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.0008745804079808295,
              top: 0.5249610543251038,
              right: 0.30391255021095276,
              bottom: 0.7869935035705566,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0001308141800109297,
              top: 0.528956413269043,
              right: 0.29662778973579407,
              bottom: 0.7859089374542236,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0007515993784181774,
              top: 0.524935781955719,
              right: 0.2973921000957489,
              bottom: 0.7945725917816162,
            },
          },
          {
            timeOffset: {
              low: 29,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.0005843181861564517,
              top: 0.5191588997840881,
              right: 0.3023744821548462,
              bottom: 0.8057193756103516,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.8249814510345459,
        frames: [
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.009224072098731995,
              top: 0.9363523125648499,
              right: 0.2185715138912201,
              bottom: 0.9983519315719604,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.01558216568082571,
              top: 0.9034991264343262,
              right: 0.2333042323589325,
              bottom: 0.9782504439353943,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.053752195090055466,
              top: 0.8770022392272949,
              right: 0.24447236955165863,
              bottom: 0.9495899677276611,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.09398454427719116,
              top: 0.8628585338592529,
              right: 0.2778894305229187,
              bottom: 0.9248768091201782,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13024507462978363,
              top: 0.8535332083702087,
              right: 0.3176352381706238,
              bottom: 0.9161874651908875,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.16860269010066986,
              top: 0.8487505316734314,
              right: 0.36630475521087646,
              bottom: 0.9118692278862,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22813527286052704,
              top: 0.8436010479927063,
              right: 0.4199659824371338,
              bottom: 0.9169062376022339,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2912006080150604,
              top: 0.8511092066764832,
              right: 0.46938151121139526,
              bottom: 0.9199341535568237,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3164351284503937,
              top: 0.8613255023956299,
              right: 0.5039300918579102,
              bottom: 0.927121639251709,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3313482999801636,
              top: 0.8700506091117859,
              right: 0.5160745978355408,
              bottom: 0.9318567514419556,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3328356444835663,
              top: 0.8725824952125549,
              right: 0.5165112018585205,
              bottom: 0.9367998242378235,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3292476534843445,
              top: 0.8732683062553406,
              right: 0.5126519799232483,
              bottom: 0.9406365156173706,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3245026767253876,
              top: 0.8763124346733093,
              right: 0.5076842308044434,
              bottom: 0.9381516575813293,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3168480694293976,
              top: 0.8751360774040222,
              right: 0.5034244656562805,
              bottom: 0.9378083944320679,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3150705397129059,
              top: 0.8688434362411499,
              right: 0.4960671067237854,
              bottom: 0.9371944665908813,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.31705453991889954,
              top: 0.867310106754303,
              right: 0.49278730154037476,
              bottom: 0.9345493912696838,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.32091832160949707,
              top: 0.8661995530128479,
              right: 0.48294520378112793,
              bottom: 0.9331849217414856,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.32100817561149597,
              top: 0.8628901839256287,
              right: 0.4903830885887146,
              bottom: 0.9399958252906799,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.6460697650909424,
        frames: [
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08844311535358429,
              top: 0.8086446523666382,
              right: 0.21345622837543488,
              bottom: 0.8783395290374756,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.089755579829216,
              top: 0.8096197247505188,
              right: 0.21955396234989166,
              bottom: 0.8764880895614624,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08674531430006027,
              top: 0.7945252656936646,
              right: 0.20135211944580078,
              bottom: 0.8744164109230042,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08607066422700882,
              top: 0.7867766618728638,
              right: 0.2154841423034668,
              bottom: 0.8719738125801086,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.08980239927768707,
              top: 0.7824907898902893,
              right: 0.23514766991138458,
              bottom: 0.863525927066803,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.10829758644104004,
              top: 0.7747111320495605,
              right: 0.2511306405067444,
              bottom: 0.852946400642395,
            },
          },
        ],
      },
      {
        name: 'shorts',
        confidence: 0.7006625533103943,
        frames: [
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.048969775438308716,
              top: 0.6689416766166687,
              right: 0.3231954276561737,
              bottom: 0.8359941840171814,
            },
          },
          {
            timeOffset: {
              low: 31,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.07496002316474915,
              top: 0.6734305620193481,
              right: 0.3490343391895294,
              bottom: 0.840617835521698,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11244628578424454,
              top: 0.6779531836509705,
              right: 0.3865203857421875,
              bottom: 0.8451406955718994,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1556081473827362,
              top: 0.6802515983581543,
              right: 0.43975457549095154,
              bottom: 0.8461877703666687,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.17984403669834137,
              top: 0.6846407651901245,
              right: 0.46409374475479126,
              bottom: 0.8507688045501709,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.19739027321338654,
              top: 0.6932634115219116,
              right: 0.4816487431526184,
              bottom: 0.8594077229499817,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.21435664594173431,
              top: 0.7001107931137085,
              right: 0.4986158609390259,
              bottom: 0.8662564754486084,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23955000936985016,
              top: 0.7114459872245789,
              right: 0.5238092541694641,
              bottom: 0.8775917887687683,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2633441686630249,
              top: 0.7188042998313904,
              right: 0.5476034283638,
              bottom: 0.8849501609802246,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3364415764808655,
              top: 0.7186566591262817,
              right: 0.6391867399215698,
              bottom: 0.8854039907455444,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4151110351085663,
              top: 0.723656177520752,
              right: 0.7218000888824463,
              bottom: 0.8838673233985901,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.502599835395813,
              top: 0.7260287404060364,
              right: 0.8090987801551819,
              bottom: 0.8864281177520752,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6430910229682922,
              top: 0.7065965533256531,
              right: 0.887589693069458,
              bottom: 0.8796881437301636,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7064144611358643,
              top: 0.7005872130393982,
              right: 0.9910171031951904,
              bottom: 0.8572083711624146,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7708598375320435,
              top: 0.6788898706436157,
              right: 1.0289843082427979,
              bottom: 0.8397668600082397,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5635957717895508,
        frames: [
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8327343463897705,
              top: 0.446064829826355,
              right: 0.9987809658050537,
              bottom: 0.6694709062576294,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8401619791984558,
              top: 0.46305719017982483,
              right: 0.9988293051719666,
              bottom: 0.638214647769928,
            },
          },
        ],
      },
      {
        name: 'top',
        confidence: 0.6373425722122192,
        frames: [
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2289816439151764,
              top: 0.41775596141815186,
              right: 0.535435676574707,
              bottom: 0.7603162527084351,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.27428942918777466,
              top: 0.41926318407058716,
              right: 0.5820409059524536,
              bottom: 0.7631015777587891,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3184540271759033,
              top: 0.41728538274765015,
              right: 0.6329158544540405,
              bottom: 0.7576221823692322,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.38515380024909973,
              top: 0.42182788252830505,
              right: 0.7100293636322021,
              bottom: 0.7624809145927429,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4662089943885803,
              top: 0.4195776581764221,
              right: 0.8035790324211121,
              bottom: 0.7661375999450684,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5439968705177307,
              top: 0.4174811840057373,
              right: 0.9001197814941406,
              bottom: 0.7532130479812622,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6351357102394104,
              top: 0.40812212228775024,
              right: 0.9615501761436462,
              bottom: 0.7484135627746582,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6958657503128052,
              top: 0.4010695517063141,
              right: 1.0154304504394531,
              bottom: 0.7417020797729492,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7497784495353699,
              top: 0.3908940851688385,
              right: 1.0301413536071777,
              bottom: 0.7498869895935059,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7910206913948059,
              top: 0.3798859715461731,
              right: 1.0314865112304688,
              bottom: 0.7769272327423096,
            },
          },
        ],
      },
      {
        name: 'billiard table',
        confidence: 0.6734746694564819,
        frames: [
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03891274333000183,
              top: 0.3937070071697235,
              right: 0.8725136518478394,
              bottom: 0.8105299472808838,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.03147704526782036,
              top: 0.3934269845485687,
              right: 0.9133742451667786,
              bottom: 0.7130793929100037,
            },
          },
        ],
      },
      {
        name: 'sneakers',
        confidence: 0.6829829812049866,
        frames: [
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6911015510559082,
              top: 0.8283811211585999,
              right: 0.8366603851318359,
              bottom: 0.9066264033317566,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6810421347618103,
              top: 0.8543228507041931,
              right: 0.840005099773407,
              bottom: 0.91709965467453,
            },
          },
          {
            timeOffset: {
              low: 32,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6803633570671082,
              top: 0.8464488983154297,
              right: 0.8544381856918335,
              bottom: 0.9102087616920471,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6795884370803833,
              top: 0.8544322848320007,
              right: 0.8551480770111084,
              bottom: 0.9070093035697937,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6791250705718994,
              top: 0.852715790271759,
              right: 0.8550202250480652,
              bottom: 0.9053176641464233,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6818974018096924,
              top: 0.8439607620239258,
              right: 0.8550283908843994,
              bottom: 0.9085723757743835,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6847464442253113,
              top: 0.8392161130905151,
              right: 0.8558228611946106,
              bottom: 0.9059751033782959,
            },
          },
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6873571276664734,
              top: 0.8390251994132996,
              right: 0.8548505902290344,
              bottom: 0.9014231562614441,
            },
          },
        ],
      },
      {
        name: 'footwear',
        confidence: 0.5375314950942993,
        frames: [
          {
            timeOffset: {
              low: 33,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.5271861553192139,
              top: 0.858473002910614,
              right: 0.6850892305374146,
              bottom: 0.9528406262397766,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.6142562031745911,
        frames: [
          {
            timeOffset: {
              low: 34,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8361731171607971,
              top: 0.41439497470855713,
              right: 0.9989229440689087,
              bottom: 0.6699224710464478,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.8216326832771301,
        frames: [
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.778228759765625,
              top: 0.3739168047904968,
              right: 0.8800509572029114,
              bottom: 0.4413215219974518,
            },
          },
          {
            timeOffset: {
              low: 38,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7777784466743469,
              top: 0.3749983310699463,
              right: 0.8787057995796204,
              bottom: 0.442186176776886,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7777764797210693,
              top: 0.37600407004356384,
              right: 0.8787025213241577,
              bottom: 0.4431915879249573,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.777012288570404,
              top: 0.37706369161605835,
              right: 0.8779382109642029,
              bottom: 0.4442511796951294,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7658205628395081,
              top: 0.3760410249233246,
              right: 0.8809049129486084,
              bottom: 0.4576508104801178,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7642021775245667,
              top: 0.378196120262146,
              right: 0.879885733127594,
              bottom: 0.4609038233757019,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.763738751411438,
              top: 0.37950989603996277,
              right: 0.8794746994972229,
              bottom: 0.46231359243392944,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7632458209991455,
              top: 0.380128413438797,
              right: 0.8789861798286438,
              bottom: 0.46294018626213074,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7636364102363586,
              top: 0.38087937235832214,
              right: 0.8758524656295776,
              bottom: 0.4616515636444092,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.763481080532074,
              top: 0.38043734431266785,
              right: 0.8746839165687561,
              bottom: 0.46069246530532837,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7633054852485657,
              top: 0.37988123297691345,
              right: 0.8744242787361145,
              bottom: 0.4600934684276581,
            },
          },
          {
            timeOffset: {
              low: 39,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7633311152458191,
              top: 0.37947702407836914,
              right: 0.8744428753852844,
              bottom: 0.45968568325042725,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7653646469116211,
              top: 0.37933599948883057,
              right: 0.874080240726471,
              bottom: 0.4577195346355438,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.766197919845581,
              top: 0.37876951694488525,
              right: 0.8745630979537964,
              bottom: 0.45691603422164917,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7665985226631165,
              top: 0.37844669818878174,
              right: 0.8749345541000366,
              bottom: 0.456573486328125,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7667868733406067,
              top: 0.3780524730682373,
              right: 0.8751204013824463,
              bottom: 0.45617762207984924,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7668070793151855,
              top: 0.3781043291091919,
              right: 0.8753560185432434,
              bottom: 0.4558417797088623,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7668690085411072,
              top: 0.3779909610748291,
              right: 0.8752204179763794,
              bottom: 0.4556063115596771,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7663062810897827,
              top: 0.3779451549053192,
              right: 0.8746411204338074,
              bottom: 0.45555025339126587,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7659294009208679,
              top: 0.3776746392250061,
              right: 0.8742628693580627,
              bottom: 0.4552788734436035,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7662273049354553,
              top: 0.37753748893737793,
              right: 0.8745606541633606,
              bottom: 0.45514166355133057,
            },
          },
          {
            timeOffset: {
              low: 40,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7664551138877869,
              top: 0.3769180476665497,
              right: 0.8747884631156921,
              bottom: 0.4545222222805023,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7666028738021851,
              top: 0.3762771189212799,
              right: 0.8749362230300903,
              bottom: 0.45388129353523254,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7666831016540527,
              top: 0.3759378492832184,
              right: 0.875016450881958,
              bottom: 0.453542023897171,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7682569622993469,
              top: 0.3774523138999939,
              right: 0.8729802966117859,
              bottom: 0.4499669075012207,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7685695290565491,
              top: 0.3767765462398529,
              right: 0.8723577857017517,
              bottom: 0.4487045705318451,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7685208320617676,
              top: 0.37603309750556946,
              right: 0.8722316026687622,
              bottom: 0.4479125142097473,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7684838175773621,
              top: 0.37482914328575134,
              right: 0.8721880912780762,
              bottom: 0.4467045068740845,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5250451564788818,
        frames: [
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22429096698760986,
              top: 0.330414354801178,
              right: 0.6835456490516663,
              bottom: 0.4368213415145874,
            },
          },
          {
            timeOffset: {
              low: 41,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22407440841197968,
              top: 0.3302086591720581,
              right: 0.683333694934845,
              bottom: 0.43645891547203064,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22407378256320953,
              top: 0.3302079141139984,
              right: 0.6833330392837524,
              bottom: 0.43645793199539185,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2240738570690155,
              top: 0.33020803332328796,
              right: 0.683333158493042,
              bottom: 0.4364580512046814,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22407391667366028,
              top: 0.3302081227302551,
              right: 0.683333158493042,
              bottom: 0.43645811080932617,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22407396137714386,
              top: 0.3302081823348999,
              right: 0.6833332180976868,
              bottom: 0.43645817041397095,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22407400608062744,
              top: 0.3302082419395447,
              right: 0.6833332777023315,
              bottom: 0.4364582300186157,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.23010118305683136,
              top: 0.3295465409755707,
              right: 0.6760338544845581,
              bottom: 0.4345929026603699,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5984141230583191,
        frames: [
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8648221492767334,
              top: 0.46828365325927734,
              right: 0.9989505410194397,
              bottom: 0.6624748706817627,
            },
          },
          {
            timeOffset: {
              low: 42,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.864814817905426,
              top: 0.4682292640209198,
              right: 0.99907386302948,
              bottom: 0.6624999642372131,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8648149371147156,
              top: 0.4687301814556122,
              right: 0.9990741610527039,
              bottom: 0.6630010008811951,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8547802567481995,
              top: 0.4614759087562561,
              right: 0.9994207620620728,
              bottom: 0.6529723405838013,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8505643010139465,
              top: 0.4607789218425751,
              right: 0.9988734722137451,
              bottom: 0.6498803496360779,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8462556600570679,
              top: 0.4571031630039215,
              right: 0.9983507394790649,
              bottom: 0.6434342861175537,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8423877358436584,
              top: 0.45700106024742126,
              right: 0.9983592629432678,
              bottom: 0.6415489912033081,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8415958881378174,
              top: 0.4587971866130829,
              right: 0.9982559084892273,
              bottom: 0.6436197757720947,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.840684175491333,
              top: 0.46061015129089355,
              right: 0.9985774159431458,
              bottom: 0.6445138454437256,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.839238166809082,
              top: 0.4612569808959961,
              right: 0.9987573027610779,
              bottom: 0.6423651576042175,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8330102562904358,
              top: 0.44571495056152344,
              right: 0.9985325336456299,
              bottom: 0.660223662853241,
            },
          },
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8371286392211914,
              top: 0.46045494079589844,
              right: 0.9961613416671753,
              bottom: 0.6432539224624634,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8390157222747803,
              top: 0.4614870548248291,
              right: 0.9974796175956726,
              bottom: 0.6417432427406311,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8389662504196167,
              top: 0.4616408944129944,
              right: 0.9983377456665039,
              bottom: 0.6380248665809631,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8398087024688721,
              top: 0.4615344703197479,
              right: 0.9985407590866089,
              bottom: 0.6391283273696899,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8397944569587708,
              top: 0.4624871611595154,
              right: 0.9989218711853027,
              bottom: 0.6391927003860474,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8396269679069519,
              top: 0.46245890855789185,
              right: 0.9990012049674988,
              bottom: 0.638911783695221,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8394038081169128,
              top: 0.46194931864738464,
              right: 0.9986225366592407,
              bottom: 0.6383126378059387,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.839326024055481,
              top: 0.4608527719974518,
              right: 0.998490035533905,
              bottom: 0.6377770900726318,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8408898711204529,
              top: 0.46138113737106323,
              right: 0.9984110593795776,
              bottom: 0.6406025886535645,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8413978219032288,
              top: 0.46216049790382385,
              right: 0.9984767436981201,
              bottom: 0.6413748264312744,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8408700823783875,
              top: 0.46339693665504456,
              right: 0.9987692832946777,
              bottom: 0.6394598484039307,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.84139084815979,
              top: 0.463335245847702,
              right: 0.99880450963974,
              bottom: 0.6410952806472778,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8417384028434753,
              top: 0.46310412883758545,
              right: 0.9987074136734009,
              bottom: 0.6431034207344055,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8410294651985168,
              top: 0.4648479223251343,
              right: 0.9989997744560242,
              bottom: 0.6430184841156006,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8414830565452576,
              top: 0.4647754430770874,
              right: 0.9985340237617493,
              bottom: 0.642220139503479,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.841522753238678,
              top: 0.46504151821136475,
              right: 0.998900294303894,
              bottom: 0.6426323652267456,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8411566615104675,
              top: 0.46448931097984314,
              right: 0.9987831115722656,
              bottom: 0.6415667533874512,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8405963182449341,
              top: 0.4639354944229126,
              right: 0.9989653825759888,
              bottom: 0.6409420371055603,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8409745097160339,
              top: 0.46311134099960327,
              right: 0.9988715052604675,
              bottom: 0.6401006579399109,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8400734066963196,
              top: 0.4635123312473297,
              right: 0.9990108013153076,
              bottom: 0.6394078731536865,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8417440056800842,
              top: 0.4628186523914337,
              right: 0.9983092546463013,
              bottom: 0.6411954164505005,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.841476559638977,
              top: 0.46398410201072693,
              right: 0.998883843421936,
              bottom: 0.6401078701019287,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8417856693267822,
              top: 0.4640856087207794,
              right: 0.9988106489181519,
              bottom: 0.6416963338851929,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8420372605323792,
              top: 0.46374478936195374,
              right: 0.9989080429077148,
              bottom: 0.6427341103553772,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8419716954231262,
              top: 0.4626384675502777,
              right: 0.9988276958465576,
              bottom: 0.6411188840866089,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8424069881439209,
              top: 0.46267253160476685,
              right: 0.9989198446273804,
              bottom: 0.6413044929504395,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8417482376098633,
              top: 0.46368032693862915,
              right: 0.9989811182022095,
              bottom: 0.6401638984680176,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.841657280921936,
              top: 0.46382442116737366,
              right: 0.9990501403808594,
              bottom: 0.640380322933197,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8412269353866577,
              top: 0.4637089669704437,
              right: 0.9988380074501038,
              bottom: 0.6403571963310242,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8410689234733582,
              top: 0.4638451635837555,
              right: 0.9986397624015808,
              bottom: 0.6418018341064453,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8408502340316772,
              top: 0.46406370401382446,
              right: 0.9982713460922241,
              bottom: 0.6421745419502258,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8413994908332825,
              top: 0.4635486602783203,
              right: 0.9986833333969116,
              bottom: 0.6432775855064392,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8422313928604126,
              top: 0.4652794897556305,
              right: 0.9987767934799194,
              bottom: 0.6431044936180115,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8364987373352051,
              top: 0.43581467866897583,
              right: 0.9979112148284912,
              bottom: 0.6628967523574829,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8385564088821411,
              top: 0.4568078815937042,
              right: 0.9968357682228088,
              bottom: 0.6419144868850708,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.839901328086853,
              top: 0.4600554406642914,
              right: 0.9978263974189758,
              bottom: 0.6400586366653442,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8397899270057678,
              top: 0.4606187641620636,
              right: 0.9986094832420349,
              bottom: 0.6395291090011597,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8402977585792542,
              top: 0.4614430367946625,
              right: 0.9991108775138855,
              bottom: 0.6406524777412415,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8406058549880981,
              top: 0.4621124863624573,
              right: 0.9990310668945312,
              bottom: 0.6403546929359436,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8396401405334473,
              top: 0.4624136984348297,
              right: 0.9988575577735901,
              bottom: 0.6361754536628723,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8394235968589783,
              top: 0.46144744753837585,
              right: 0.9987130165100098,
              bottom: 0.6370714902877808,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8399383425712585,
              top: 0.4619300961494446,
              right: 0.9983626008033752,
              bottom: 0.6382423639297485,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8400510549545288,
              top: 0.4620557129383087,
              right: 0.9984020590782166,
              bottom: 0.6390858292579651,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8404573798179626,
              top: 0.46160921454429626,
              right: 0.9984250068664551,
              bottom: 0.6392190456390381,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8400817513465881,
              top: 0.4619522988796234,
              right: 0.998725950717926,
              bottom: 0.6388224363327026,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.840842068195343,
              top: 0.461156964302063,
              right: 0.9985235333442688,
              bottom: 0.6412056088447571,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8421381115913391,
              top: 0.46169936656951904,
              right: 0.998502254486084,
              bottom: 0.6436190605163574,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.841539740562439,
              top: 0.46290266513824463,
              right: 0.9990731477737427,
              bottom: 0.6418428421020508,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.832927405834198,
              top: 0.4486994445323944,
              right: 0.9994886517524719,
              bottom: 0.6632315516471863,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.837128221988678,
              top: 0.4644404649734497,
              right: 0.9966216683387756,
              bottom: 0.6432554125785828,
            },
          },
          {
            timeOffset: {
              low: 48,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8278344869613647,
              top: 0.44610172510147095,
              right: 0.9976850748062134,
              bottom: 0.6599316596984863,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8284544348716736,
              top: 0.443787544965744,
              right: 0.9946408271789551,
              bottom: 0.6618789434432983,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8291236758232117,
              top: 0.4440940022468567,
              right: 0.9938077330589294,
              bottom: 0.6624744534492493,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8285052180290222,
              top: 0.4448787271976471,
              right: 0.9947731494903564,
              bottom: 0.6628029942512512,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8257881999015808,
              top: 0.44716253876686096,
              right: 0.9959161877632141,
              bottom: 0.660698413848877,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8266593813896179,
              top: 0.4455276429653168,
              right: 0.9954121112823486,
              bottom: 0.6631261110305786,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8274843692779541,
              top: 0.44735094904899597,
              right: 0.9956508278846741,
              bottom: 0.6619517803192139,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8277722597122192,
              top: 0.4449346363544464,
              right: 0.9956929683685303,
              bottom: 0.6596322059631348,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8278656005859375,
              top: 0.44454407691955566,
              right: 0.9954857230186462,
              bottom: 0.6591370105743408,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8268750309944153,
              top: 0.4438437521457672,
              right: 0.9963931441307068,
              bottom: 0.6618052124977112,
            },
          },
          {
            timeOffset: {
              low: 49,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8265805244445801,
              top: 0.44577258825302124,
              right: 0.9960031509399414,
              bottom: 0.6584352254867554,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8268062472343445,
              top: 0.4446331560611725,
              right: 0.9960441589355469,
              bottom: 0.6591514945030212,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8273583650588989,
              top: 0.4426330626010895,
              right: 0.9949265718460083,
              bottom: 0.6576534509658813,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8359974026679993,
              top: 0.45999792218208313,
              right: 0.9953917264938354,
              bottom: 0.64055335521698,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8311373591423035,
              top: 0.4445611834526062,
              right: 0.9969780445098877,
              bottom: 0.6568474769592285,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8307281732559204,
              top: 0.4402220547199249,
              right: 0.9959689974784851,
              bottom: 0.6590306162834167,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8294973373413086,
              top: 0.44334885478019714,
              right: 0.996325671672821,
              bottom: 0.6590155363082886,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8278858661651611,
              top: 0.4444851577281952,
              right: 0.9962482452392578,
              bottom: 0.658690333366394,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8281130194664001,
              top: 0.4430902302265167,
              right: 0.9953204393386841,
              bottom: 0.6601921319961548,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8266900181770325,
              top: 0.4448220729827881,
              right: 0.9959283471107483,
              bottom: 0.6578918099403381,
            },
          },
          {
            timeOffset: {
              low: 50,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.825890064239502,
              top: 0.4443890154361725,
              right: 0.9960871934890747,
              bottom: 0.657630205154419,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8263614177703857,
              top: 0.4456010162830353,
              right: 0.9956897497177124,
              bottom: 0.6570493578910828,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8272147178649902,
              top: 0.4449225664138794,
              right: 0.9955833554267883,
              bottom: 0.6590753197669983,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.827407717704773,
              top: 0.4448798596858978,
              right: 0.9959959983825684,
              bottom: 0.6588157415390015,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8278245329856873,
              top: 0.4441024661064148,
              right: 0.9958761930465698,
              bottom: 0.6587223410606384,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8291270136833191,
              top: 0.4414006471633911,
              right: 0.995091438293457,
              bottom: 0.6584281921386719,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8355108499526978,
              top: 0.4603307247161865,
              right: 0.9961977005004883,
              bottom: 0.6383207440376282,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8300832509994507,
              top: 0.4437924325466156,
              right: 0.9972261190414429,
              bottom: 0.6555231213569641,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8290867209434509,
              top: 0.44411835074424744,
              right: 0.996418833732605,
              bottom: 0.6555984020233154,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8286861181259155,
              top: 0.4427109956741333,
              right: 0.9952982664108276,
              bottom: 0.655745804309845,
            },
          },
          {
            timeOffset: {
              low: 51,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8291373252868652,
              top: 0.44053229689598083,
              right: 0.9947226047515869,
              bottom: 0.658622145652771,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8270807862281799,
              top: 0.44193020462989807,
              right: 0.9956881403923035,
              bottom: 0.6592755913734436,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.826104462146759,
              top: 0.4431184232234955,
              right: 0.9955911636352539,
              bottom: 0.6577920913696289,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8276948928833008,
              top: 0.44197583198547363,
              right: 0.9945497512817383,
              bottom: 0.6590514183044434,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8270607590675354,
              top: 0.4425524175167084,
              right: 0.9953176975250244,
              bottom: 0.6588472723960876,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8267101049423218,
              top: 0.4417264759540558,
              right: 0.9954450726509094,
              bottom: 0.6574627161026001,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8261868357658386,
              top: 0.44169291853904724,
              right: 0.99552983045578,
              bottom: 0.6552682518959045,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8268977999687195,
              top: 0.44100716710090637,
              right: 0.9945579171180725,
              bottom: 0.6553196907043457,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8273214101791382,
              top: 0.44332367181777954,
              right: 0.9952042102813721,
              bottom: 0.6573684811592102,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8279352188110352,
              top: 0.4435983896255493,
              right: 0.9953446388244629,
              bottom: 0.6622257232666016,
            },
          },
          {
            timeOffset: {
              low: 52,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8283942341804504,
              top: 0.445673406124115,
              right: 0.9950798153877258,
              bottom: 0.6613938808441162,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8286461234092712,
              top: 0.4465360939502716,
              right: 0.995314359664917,
              bottom: 0.6621690988540649,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8287772536277771,
              top: 0.44336435198783875,
              right: 0.9950520992279053,
              bottom: 0.6606303453445435,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8277938961982727,
              top: 0.4452897012233734,
              right: 0.9961386919021606,
              bottom: 0.6589316129684448,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8284270763397217,
              top: 0.44388991594314575,
              right: 0.9961401224136353,
              bottom: 0.6597996950149536,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.829339861869812,
              top: 0.4450075030326843,
              right: 0.9959052801132202,
              bottom: 0.6597692966461182,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8293901681900024,
              top: 0.4455535113811493,
              right: 0.9963721036911011,
              bottom: 0.6597774624824524,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8291922211647034,
              top: 0.44298768043518066,
              right: 0.9968922138214111,
              bottom: 0.6604721546173096,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8295928835868835,
              top: 0.4425863027572632,
              right: 0.9962676167488098,
              bottom: 0.658706784248352,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8285356760025024,
              top: 0.44360867142677307,
              right: 0.996006965637207,
              bottom: 0.6586982011795044,
            },
          },
          {
            timeOffset: {
              low: 53,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.828515350818634,
              top: 0.44361236691474915,
              right: 0.9960978031158447,
              bottom: 0.6587153077125549,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8360044956207275,
              top: 0.4618568420410156,
              right: 0.9962482452392578,
              bottom: 0.6417538523674011,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8299673795700073,
              top: 0.44478341937065125,
              right: 0.9974130392074585,
              bottom: 0.6576563119888306,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8363814353942871,
              top: 0.4611169099807739,
              right: 0.9961971044540405,
              bottom: 0.6407912373542786,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8293700218200684,
              top: 0.44747668504714966,
              right: 0.9977816343307495,
              bottom: 0.6564340591430664,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8362609148025513,
              top: 0.46255922317504883,
              right: 0.9961991906166077,
              bottom: 0.6419634222984314,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8294107913970947,
              top: 0.4483334720134735,
              right: 0.9973800182342529,
              bottom: 0.6575089693069458,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.835199773311615,
              top: 0.46259161829948425,
              right: 0.9959413409233093,
              bottom: 0.6402463316917419,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8286096453666687,
              top: 0.44606733322143555,
              right: 0.9970180988311768,
              bottom: 0.6579962968826294,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8269736170768738,
              top: 0.4454703629016876,
              right: 0.9960095882415771,
              bottom: 0.6607885956764221,
            },
          },
          {
            timeOffset: {
              low: 54,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8265018463134766,
              top: 0.44644224643707275,
              right: 0.9948328733444214,
              bottom: 0.6625503301620483,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8220300674438477,
              top: 0.44649380445480347,
              right: 0.9966075420379639,
              bottom: 0.6615414619445801,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.826374351978302,
              top: 0.4428463578224182,
              right: 0.9943075180053711,
              bottom: 0.6644657850265503,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8364306092262268,
              top: 0.46098607778549194,
              right: 0.9947994947433472,
              bottom: 0.645758867263794,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8394106030464172,
              top: 0.46006909012794495,
              right: 0.9978448748588562,
              bottom: 0.6403102278709412,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8416211009025574,
              top: 0.457996666431427,
              right: 0.998842179775238,
              bottom: 0.6400129795074463,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8416295051574707,
              top: 0.46050137281417847,
              right: 0.9997349977493286,
              bottom: 0.6377931833267212,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8411684036254883,
              top: 0.4609719216823578,
              right: 0.9998610615730286,
              bottom: 0.6403117179870605,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8418717384338379,
              top: 0.46105292439460754,
              right: 1.0002353191375732,
              bottom: 0.6402341723442078,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8407435417175293,
              top: 0.4616214334964752,
              right: 0.9998310804367065,
              bottom: 0.6393525004386902,
            },
          },
          {
            timeOffset: {
              low: 55,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8308733105659485,
              top: 0.44922396540641785,
              right: 1.0004940032958984,
              bottom: 0.6571102142333984,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8353548645973206,
              top: 0.462619423866272,
              right: 0.9966925978660583,
              bottom: 0.6409722566604614,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.837439239025116,
              top: 0.46178287267684937,
              right: 0.9973958730697632,
              bottom: 0.6385804414749146,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8379645347595215,
              top: 0.4609832763671875,
              right: 0.9983550310134888,
              bottom: 0.6377964615821838,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.839741051197052,
              top: 0.4594167470932007,
              right: 0.9982855319976807,
              bottom: 0.6389771699905396,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8400653600692749,
              top: 0.4607095420360565,
              right: 0.9993196725845337,
              bottom: 0.64159095287323,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8409604430198669,
              top: 0.46089670062065125,
              right: 0.9993413686752319,
              bottom: 0.6429659724235535,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8421319723129272,
              top: 0.4614109694957733,
              right: 0.9994105100631714,
              bottom: 0.644355297088623,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8435984253883362,
              top: 0.4621400833129883,
              right: 0.9990942478179932,
              bottom: 0.6432902812957764,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8436523675918579,
              top: 0.46083325147628784,
              right: 0.9993146657943726,
              bottom: 0.6445636749267578,
            },
          },
          {
            timeOffset: {
              low: 56,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8454959988594055,
              top: 0.4597890079021454,
              right: 0.998971164226532,
              bottom: 0.6480943560600281,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8472758531570435,
              top: 0.46228811144828796,
              right: 0.9987131357192993,
              bottom: 0.6481072902679443,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8474377989768982,
              top: 0.46358805894851685,
              right: 0.9990143179893494,
              bottom: 0.6497254371643066,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8532994389533997,
              top: 0.46592918038368225,
              right: 0.9969715476036072,
              bottom: 0.6480008363723755,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8614352941513062,
              top: 0.46463847160339355,
              right: 0.9960633516311646,
              bottom: 0.6484668850898743,
            },
          },
          {
            timeOffset: {
              low: 57,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8778391480445862,
              top: 0.4583296477794647,
              right: 0.9943428635597229,
              bottom: 0.659451425075531,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.5461259484291077,
        frames: [
          {
            timeOffset: {
              low: 43,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.22473269701004028,
              top: 0.3307707607746124,
              right: 0.6776365637779236,
              bottom: 0.4408157169818878,
            },
          },
        ],
      },
      {
        name: 'clothing',
        confidence: 0.5264872908592224,
        frames: [
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6843457818031311,
              top: 0.3054341971874237,
              right: 0.8609728217124939,
              bottom: 0.45197823643684387,
            },
          },
        ],
      },
      {
        name: 'refrigerator',
        confidence: 0.5323299765586853,
        frames: [
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8012195825576782,
              top: 0.27027833461761475,
              right: 0.8955962657928467,
              bottom: 0.44903993606567383,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8009263873100281,
              top: 0.2697924077510834,
              right: 0.8953707218170166,
              bottom: 0.4484384059906006,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8009255528450012,
              top: 0.2697908878326416,
              right: 0.8953700065612793,
              bottom: 0.4484367370605469,
            },
          },
          {
            timeOffset: {
              low: 44,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8000359535217285,
              top: 0.27270200848579407,
              right: 0.8925251960754395,
              bottom: 0.44824355840682983,
            },
          },
        ],
      },
      {
        name: 'refrigerator',
        confidence: 0.5392367839813232,
        frames: [
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8015369772911072,
              top: 0.27028167247772217,
              right: 0.8914820551872253,
              bottom: 0.4498329162597656,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8018513917922974,
              top: 0.27083250880241394,
              right: 0.8916664123535156,
              bottom: 0.4505198001861572,
            },
          },
          {
            timeOffset: {
              low: 45,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7997473478317261,
              top: 0.26980364322662354,
              right: 0.8951517939567566,
              bottom: 0.4493735432624817,
            },
          },
        ],
      },
      {
        name: 'refrigerator',
        confidence: 0.6416414976119995,
        frames: [
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8015748262405396,
              top: 0.27152061462402344,
              right: 0.8962314128875732,
              bottom: 0.44874459505081177,
            },
          },
          {
            timeOffset: {
              low: 46,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8018514513969421,
              top: 0.27135440707206726,
              right: 0.8962962627410889,
              bottom: 0.44843795895576477,
            },
          },
          {
            timeOffset: {
              low: 47,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.799284815788269,
              top: 0.2700449824333191,
              right: 0.8955527544021606,
              bottom: 0.44880014657974243,
            },
          },
        ],
      },
      {
        name: 'couch',
        confidence: 0.6366746425628662,
        frames: [
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.83881014585495,
              top: 0.46305572986602783,
              right: 0.9969248175621033,
              bottom: 0.6359022855758667,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8398132920265198,
              top: 0.4640609622001648,
              right: 0.9981462955474854,
              bottom: 0.6369775533676147,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8400156497955322,
              top: 0.4514816999435425,
              right: 0.999893069267273,
              bottom: 0.5900426506996155,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8397186994552612,
              top: 0.4489201009273529,
              right: 1.000149130821228,
              bottom: 0.5854783058166504,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8385434746742249,
              top: 0.4472409188747406,
              right: 1.000292181968689,
              bottom: 0.5737550854682922,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.8064863681793213,
        frames: [
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.8277778029441833,
              right: 0.9101852178573608,
              bottom: 0.38229167461395264,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.9106446504592896,
        frames: [
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7950137257575989,
              top: 0.5206677317619324,
              right: 0.9983149170875549,
              bottom: 0.9521075487136841,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7805777192115784,
              top: 0.5151126980781555,
              right: 0.9833562970161438,
              bottom: 0.9463629722595215,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7705271244049072,
              top: 0.4935927987098694,
              right: 0.964816689491272,
              bottom: 0.9062217473983765,
            },
          },
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7604432702064514,
              top: 0.49556460976600647,
              right: 0.9540255069732666,
              bottom: 0.9066418409347534,
            },
          },
        ],
      },
      {
        name: 'table top',
        confidence: 0.7727344632148743,
        frames: [
          {
            timeOffset: {
              low: 59,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.036808669567108154,
              top: 0.40302059054374695,
              right: 0.8714628219604492,
              bottom: 0.7608515024185181,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.037036679685115814,
              top: 0.38960394263267517,
              right: 0.8712965250015259,
              bottom: 0.7474164962768555,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.04579882696270943,
              top: 0.4045950770378113,
              right: 0.7884604930877686,
              bottom: 0.7624075412750244,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.005593258887529373,
              top: 0.4140595495700836,
              right: 0.839852511882782,
              bottom: 0.7718720436096191,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.1838679313659668,
              top: 0.41820427775382996,
              right: 0.7922351360321045,
              bottom: 0.6198672652244568,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.24485112726688385,
              top: 0.3658263087272644,
              right: 0.8740552067756653,
              bottom: 0.5864269137382507,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.24321044981479645,
              top: 0.3049687147140503,
              right: 0.979803740978241,
              bottom: 0.5836840867996216,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2961009740829468,
              top: 0.24417948722839355,
              right: 1.0087822675704956,
              bottom: 0.5700304508209229,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4107305407524109,
              top: 0.20761379599571228,
              right: 0.9974476099014282,
              bottom: 0.5647064447402954,
            },
          },
        ],
      },
      {
        name: 'person',
        confidence: 0.8866528868675232,
        frames: [
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.011462860740721226,
              top: 0.04428226500749588,
              right: 0.9770103096961975,
              bottom: 0.9534652233123779,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.00001696895378699992,
              top: 0.06923244893550873,
              right: 0.9306275844573975,
              bottom: 0.9780871868133545,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.00034690709435380995,
              top: 0.07231765240430832,
              right: 0.9183228015899658,
              bottom: 0.9811719059944153,
            },
          },
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: -0.003167474642395973,
              top: 0.05017421767115593,
              right: 0.9603403806686401,
              bottom: 1.000557541847229,
            },
          },
        ],
      },
      {
        name: 'chair',
        confidence: 0.7928748726844788,
        frames: [
          {
            timeOffset: {
              low: 60,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2699238955974579,
              top: 0.2221120446920395,
              right: 0.9953892230987549,
              bottom: 0.481207013130188,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.2699238955974579,
              top: 0.2221120446920395,
              right: 0.9953892230987549,
              bottom: 0.481207013130188,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.3657005727291107,
              top: 0.03760908171534538,
              right: 0.8515743017196655,
              bottom: 0.3763662576675415,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.44018545746803284,
              top: -0.0010100540239363909,
              right: 0.9262786507606506,
              bottom: 0.3375478684902191,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.481814444065094,
              top: -0.025150291621685028,
              right: 0.9679240584373474,
              bottom: 0.3133927285671234,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.45391538739204407,
              top: -0.011922009289264679,
              right: 1.0038905143737793,
              bottom: 0.30893903970718384,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.4535568356513977,
              top: -0.009745275601744652,
              right: 0.9947161674499512,
              bottom: 0.31110242009162903,
            },
          },
        ],
      },
      {
        name: 'luggage & bags',
        confidence: 0.690446138381958,
        frames: [
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.516284704208374,
              top: 0.1739610880613327,
              right: 0.998099684715271,
              bottom: 0.48198401927948,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.38728106021881104,
              top: 0.04597242921590805,
              right: 0.8950169682502747,
              bottom: 0.3915671110153198,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.6404282450675964,
              top: -0.0009465794428251684,
              right: 0.9913707971572876,
              bottom: 0.2265252321958542,
            },
          },
        ],
      },
      {
        name: 'luggage & bags',
        confidence: 0.8134609460830688,
        frames: [
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7135652303695679,
              top: 0.23095117509365082,
              right: 1,
              bottom: 0.4547552466392517,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7732846736907959,
              top: 0.10164611786603928,
              right: 1.000001072883606,
              bottom: 0.4221058189868927,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7926487326622009,
              top: 0.141201913356781,
              right: 1.0004428625106812,
              bottom: 0.41257983446121216,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7946913838386536,
              top: 0.1367509514093399,
              right: 1.002129316329956,
              bottom: 0.4081069827079773,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7637394070625305,
              top: 0.06888928264379501,
              right: 1.0058778524398804,
              bottom: 0.4282877743244171,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.7539560198783875,
              top: 0.104285828769207,
              right: 1.0027893781661987,
              bottom: 0.4088001549243927,
            },
          },
        ],
      },
      {
        name: 'luggage & bags',
        confidence: 0.7600993514060974,
        frames: [
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.06446428596973419,
              top: 0.20586271584033966,
              right: 0.3249000310897827,
              bottom: 0.4642413258552551,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.13250508904457092,
              top: 0.15547272562980652,
              right: 0.38544026017189026,
              bottom: 0.4183577001094818,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14146475493907928,
              top: 0.127604678273201,
              right: 0.41181516647338867,
              bottom: 0.39830654859542847,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.14206035435199738,
              top: 0.11727499216794968,
              right: 0.404019832611084,
              bottom: 0.3913857638835907,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.12916386127471924,
              top: 0.11958711594343185,
              right: 0.38706639409065247,
              bottom: 0.3910455107688904,
            },
          },
          {
            timeOffset: {
              low: 61,
              high: 0,
              unsigned: false,
            },
            boundingBox: {
              left: 0.11575368046760559,
              top: 0.1252560168504715,
              right: 0.37777477502822876,
              bottom: 0.3949992060661316,
            },
          },
        ],
      },
    ],
    persons: [
      {
        tracks: [
          {
            confidence: 0.7373365163803101,
            frames: [],
          },
        ],
      },
      {
        tracks: [
          {
            confidence: 0.7676138877868652,
            frames: [],
          },
        ],
      },
      {
        tracks: [
          {
            confidence: 0.787347674369812,
            frames: [],
          },
        ],
      },
      {
        tracks: [
          {
            confidence: 0.5466037392616272,
            frames: [],
          },
        ],
      },
    ],
    shots: [
      {
        startTime: {
          low: 0,
          high: 0,
          unsigned: false,
        },
        endTime: {
          low: 61,
          high: 0,
          unsigned: false,
        },
      },
    ],
  },
}
*/

/*
Labels:
- recreation room: 50.80%
- table: 69.66%
- billiard table: 93.29%
- pool: 97.12%
- billiard ball: 50.77%
- games: 33.07%
- flooring: 39.11%
- cue sports: 87.75%
- sports: 52.20%
- billiard room: 65.48%
- indoor games and sports: 57.42%
- floor: 67.84%
- pocket billiards: 33.85%
- furniture: 40.63%

Objects:
- person: 90.65% (34 frames)
- ceiling fan: 79.57% (604 frames)
- table: 78.72% (609 frames)
- t-shirt: 65.44% (17 frames)
- billiard table: 70.43% (10 frames)
- couch: 62.11% (4 frames)
- person: 97.33% (5 frames)
- shorts: 58.67% (2 frames)
- person: 93.35% (1 frames)
- person: 96.06% (176 frames)
- person: 79.52% (2 frames)
- couch: 51.38% (6 frames)
- clothing: 54.26% (8 frames)
- clothing: 54.07% (7 frames)
- couch: 50.37% (1 frames)
- couch: 52.41% (4 frames)
- table: 52.32% (1 frames)
- person: 97.14% (372 frames)
- footwear: 79.03% (6 frames)
- sneakers: 66.42% (3 frames)
- sneakers: 63.12% (27 frames)
- table top: 50.82% (1 frames)
- billiard table: 55.81% (1 frames)
- shorts: 65.92% (17 frames)
- clothing: 52.55% (4 frames)
- couch: 55.61% (5 frames)
- billiard table: 66.02% (1 frames)
- sneakers: 54.66% (1 frames)
- shorts: 55.34% (2 frames)
- top: 51.77% (1 frames)
- sneakers: 68.11% (54 frames)
- dog: 69.06% (3 frames)
- clothing: 58.79% (5 frames)
- sneakers: 82.50% (18 frames)
- sneakers: 64.61% (6 frames)
- shorts: 70.07% (15 frames)
- couch: 56.36% (2 frames)
- top: 63.73% (10 frames)
- billiard table: 67.35% (2 frames)
- sneakers: 68.30% (8 frames)
- footwear: 53.75% (1 frames)
- couch: 61.43% (1 frames)
- person: 82.16% (28 frames)
- couch: 52.50% (8 frames)
- couch: 59.84% (147 frames)
- couch: 54.61% (1 frames)
- clothing: 52.65% (1 frames)
- refrigerator: 53.23% (4 frames)
- refrigerator: 53.92% (3 frames)
- refrigerator: 64.16% (3 frames)
- couch: 63.67% (5 frames)
- person: 80.65% (1 frames)
- person: 91.06% (4 frames)
- table top: 77.27% (9 frames)
- person: 88.67% (4 frames)
- chair: 79.29% (7 frames)
- luggage & bags: 69.04% (3 frames)
- luggage & bags: 81.35% (6 frames)
- luggage & bags: 76.01% (6 frames)

Persons:
- Person 1: 1 tracks
- Person 2: 1 tracks
- Person 3: 1 tracks
- Person 4: 1 tracks

Shots:
- Shot 1: [object Object]s to [object Object]s
*/
